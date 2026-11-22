"use client"

import { useEffect, useRef, useState } from "react"

const reduced = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

/** Global effects: cursor spotlight on .card elements and scroll reveal on [data-reveal]. */
export function Effects() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(".card")
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty("--mx", `${e.clientX - r.left}px`)
      el.style.setProperty("--my", `${e.clientY - r.top}px`)
    }
    window.addEventListener("pointermove", onMove, { passive: true })

    // close the mobile menu after a link is chosen
    const menu = document.querySelector<HTMLDetailsElement>("details.menu")
    const closeMenu = (e: Event) => {
      if ((e.target as HTMLElement).closest("a") && menu) menu.open = false
    }
    menu?.addEventListener("click", closeMenu)

    const els = document.querySelectorAll<HTMLElement>("[data-reveal]")
    if (reduced() || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"))
      return () => window.removeEventListener("pointermove", onMove)
    }
    document.documentElement.classList.add("js-reveal")
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in")
            io.unobserve(en.target)
          }
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    )
    els.forEach((el) => io.observe(el))
    return () => {
      window.removeEventListener("pointermove", onMove)
      io.disconnect()
    }
  }, [])
  return null
}

export function Clock({ tz, compact = false }: { tz: string; compact?: boolean }) {
  const [now, setNow] = useState<Date | null>(null)
  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const fmt = (o: Intl.DateTimeFormatOptions) =>
    now ? new Intl.DateTimeFormat("en-US", { timeZone: tz, ...o }).format(now) : "--"
  const time = fmt({ hour: "2-digit", minute: "2-digit", hour12: false })
  const sec = fmt({ second: "2-digit" }).padStart(2, "0")
  if (compact) return <span suppressHydrationWarning>{time}:{sec} EST</span>
  return (
    <div className="clock" suppressHydrationWarning>
      <span className="clock-time">{time}</span>
      <span className="clock-sec">{sec}</span>
      <span className="clock-day">{fmt({ weekday: "long", month: "short", day: "numeric" })}</span>
    </div>
  )
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(to)
  useEffect(() => {
    if (reduced() || !ref.current) return
    setN(0)
    let raf = 0
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / 1400)
        setN(Math.round(to * (1 - Math.pow(1 - p, 4))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to])
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

const LINES: { p?: string; t: string; c?: string }[] = [
  { p: "$", t: "whoami" },
  { t: "pruthu — offensive & AI security researcher", c: "out" },
  { p: "$", t: "cat ./focus" },
  { t: "llm-redteam  mcp-abuse  exploit-dev  appsec", c: "out" },
  { p: "$", t: "./hof --count" },
  { t: "[+] 8 halls of fame · 2 CVEs · 100+ bugs", c: "ok" },
]

export function Terminal() {
  const [shown, setShown] = useState<{ line: number; ch: number }>({ line: LINES.length, ch: 0 })
  useEffect(() => {
    if (reduced()) return
    setShown({ line: 0, ch: 0 })
    let line = 0
    let ch = 0
    const id = setInterval(() => {
      if (line >= LINES.length) return clearInterval(id)
      const cur = LINES[line]
      if (cur.c) {
        line++
        ch = 0
      } else if (ch < cur.t.length) {
        ch++
      } else {
        line++
        ch = 0
      }
      setShown({ line, ch })
    }, 55)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="term" aria-label="Terminal introduction">
      {LINES.map((l, i) => {
        if (i > shown.line) return null
        const text = i === shown.line && !l.c ? l.t.slice(0, shown.ch) : i === shown.line ? "" : l.t
        if (i === shown.line && l.c) return null
        return (
          <div key={i} className={`term-line ${l.c ?? ""}`}>
            {l.p && <span className="term-p">{l.p}</span>}
            {text}
            {i === shown.line && <span className="caret" aria-hidden />}
          </div>
        )
      })}
      {shown.line >= LINES.length && (
        <div className="term-line">
          <span className="term-p">$</span>
          <span className="caret" aria-hidden />
        </div>
      )}
    </div>
  )
}
