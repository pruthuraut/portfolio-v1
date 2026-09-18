"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, ArrowUpRight, Check, ChevronRight, Github, Linkedin, Mail, Play, Radio, ShieldCheck, Terminal, Zap } from "lucide-react"

const hallOfFame = [
  { name: "NASA", mark: "NASA", logo: "nasa", tone: "blue" },
  { name: "Apple", mark: "●", logo: "apple", tone: "silver" },
  { name: "World Health Organization", mark: "WHO", logo: "worldhealthorganization", tone: "teal" },
  { name: "BBC", mark: "BBC", logo: "bbc", tone: "red" },
  { name: "Drexel University", mark: "D", logo: "drexeluniversity", tone: "gold" },
  { name: "University of Cambridge", mark: "C", logo: "universityofcambridge", tone: "blue" },
]

const projects = [
  { number: "01", name: "Nightcrawler", type: "MCP SECURITY / EXPLOIT RESEARCH", summary: "Proof-driven MCP security research that turns a static weakness into a live exploit path.", detail: "Nightcrawler maps the distance between a finding and a failure that a team can reproduce. The work focuses on risky tool boundaries, impact validation, and making the path legible enough to fix.", tags: ["MCP", "Threat modeling", "Exploit validation"], visual: "nightcrawler", accent: "lime" },
  { number: "02", name: "VibeGuard", type: "AI SECURITY / DEVELOPER TOOLING", summary: "An in-repo secure coding agent for LLMs, pre-commit hooks, SCA, and safer dependencies.", detail: "VibeGuard brings security feedback into the moment code is written. It combines an agent workflow with static analysis and dependency checks so teams can move quickly without making security somebody else’s queue.", tags: ["LLM security", "Semgrep", "SCA", "Pre-commit"], visual: "vibeguard", accent: "cyan" },
  { number: "03", name: "Obsedian Guard", type: "REPEATABLE ASSESSMENT / INFRASTRUCTURE", summary: "Two-tier testing infrastructure built for repeatable enterprise risk assessment.", detail: "Obsedian Guard turns one-off assessment knowledge into a repeatable testing surface. The system separates signal collection from analyst validation so findings can be compared, reproduced, and communicated with confidence.", tags: ["VAPT", "Automation", "Risk assessment"], visual: "obsedian", accent: "orange" },
]

const experience = [
  { year: "2026 — NOW", company: "Illumio", role: "Product Security Engineer Intern", detail: "LLM security harnesses, binary analysis, Semgrep rules, and secure-coding workflows.", signal: "BUILD" },
  { year: "2024 — 2025", company: "Bugcrowd", role: "Security Researcher", detail: "100+ vulnerabilities across 30+ enterprise programs including NASA, Apple, WHO, and BBC.", signal: "DISCOVER" },
  { year: "2024 — 2025", company: "CoE-CNDS Labs", role: "Windows Internals Security Researcher", detail: "Reverse engineering, LPE/RCE research, and proof-of-concept exploit development.", signal: "REVERSE" },
  { year: "2024", company: "GreenCurve Securities", role: "VAPT Intern", detail: "50+ assessments and OWASP-aligned secure coding guidance.", signal: "HARDEN" },
]

const experienceDetails: Record<string, string[]> = {
  Illumio: ["LLM security", "Binary analysis", "Semgrep", "Secure coding"],
  Bugcrowd: ["Responsible disclosure", "Web security", "Impact validation", "Enterprise programs"],
  "CoE-CNDS Labs": ["Windows internals", "Reverse engineering", "LPE / RCE", "Exploit development"],
  "GreenCurve Securities": ["VAPT", "OWASP", "Threat modeling", "Remediation guidance"],
}

const certifications = ["Certified Ethical Hacker (CEH)", "eJPT v2", "HTB Mumbai CTF Winner", "ACECTF Winner", "REDFOXCTF Winner", "ABITRGIT CTF Winner"]

function CyberField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointer = useRef({ x: 0, y: 0 })
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!canvas || !context) return
    const points = Array.from({ length: 180 }, (_, index) => {
      const seed = Math.sin(index * 91.731) * 43758.5453
      const random = seed - Math.floor(seed)
      return { x: (random * 2 - 1) * 1.25, y: (Math.sin(index * 17.13) * .5 + .5) * 1.25, z: (index % 37) / 37, size: .6 + (index % 4) * .35, hot: index % 17 === 0 }
    })
    let frame = 0
    let raf = 0
    const resize = () => { const ratio = Math.min(window.devicePixelRatio || 1, 1.5); canvas.width = window.innerWidth * ratio; canvas.height = window.innerHeight * ratio; context.setTransform(ratio, 0, 0, ratio, 0, 0) }
    const draw = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const horizon = height * .54
      const scroll = window.scrollY
      context.clearRect(0, 0, width, height)
      context.fillStyle = "rgba(5, 9, 10, .28)"
      context.fillRect(0, 0, width, height)
      const glow = context.createRadialGradient(width * .52 + pointer.current.x * 80, horizon, 0, width * .52, horizon, width * .7)
      glow.addColorStop(0, "rgba(0, 240, 255, .11)"); glow.addColorStop(.42, "rgba(34, 211, 238, .025)"); glow.addColorStop(1, "rgba(0, 0, 0, 0)")
      context.fillStyle = glow; context.fillRect(0, 0, width, height)
      context.strokeStyle = "rgba(0, 240, 255, .11)"; context.lineWidth = 1
      for (let line = 0; line < 13; line++) { const y = horizon + Math.pow(line / 13, 1.7) * height * .62 + (scroll * .12 % 26); context.beginPath(); context.moveTo(0, y); context.lineTo(width, y); context.stroke() }
      for (let line = -10; line <= 10; line++) { context.beginPath(); context.moveTo(width / 2, horizon); context.lineTo(width / 2 + line * width * .14, height); context.stroke() }
      points.forEach((point) => { const z = (point.z + frame * .00035 + scroll * .000025) % 1; const scale = 1 / (z * 1.35 + .12); const x = width / 2 + (point.x + pointer.current.x * .08) * width * .33 * scale; const y = horizon + (point.y - .58 + pointer.current.y * .05) * height * .72 * scale; if (x < -10 || x > width + 10 || y < horizon || y > height + 10) return; const alpha = Math.min(.9, .16 + (1 - z) * .8); context.globalAlpha = alpha; context.fillStyle = point.hot ? "#d9f56a" : "#00f0ff"; context.fillRect(x, y, point.size * scale, point.size * scale); context.globalAlpha = 1 })
      context.fillStyle = "rgba(0, 240, 255, .08)"; context.fillRect(0, horizon, width, 1)
      frame += 1; raf = requestAnimationFrame(draw)
    }
    resize(); draw(); window.addEventListener("resize", resize); window.addEventListener("pointermove", (event) => { pointer.current = { x: event.clientX / window.innerWidth - .5, y: event.clientY / window.innerHeight - .5 } })
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize) }
  }, [])
  return <canvas className="cyber-field" ref={canvasRef} aria-hidden="true" />
}

function ProjectVisual({ kind }: { kind: string }) {
  return <div className={`project-visual visual-${kind}`} aria-hidden="true">
    <div className="visual-topline"><span>LIVE SURFACE</span><span>● REC</span></div>
    {kind === "nightcrawler" && <><div className="orb-core"><span>RCE</span></div><div className="orbit-line orbit-one" /><div className="orbit-line orbit-two" /><div className="visual-node node-a">TOOL</div><div className="visual-node node-b">MCP</div><div className="visual-node node-c">EXEC</div></>}
    {kind === "vibeguard" && <div className="terminal-lines"><span>› vibe.guard scan --staged</span><b>SECURE CONTEXT FOUND</b><span>› dependency graph / 142 nodes</span><span>› agent policy / enforced</span><i>▮</i></div>}
    {kind === "obsedian" && <div className="signal-bars"><span style={{ height: "32%" }} /><span style={{ height: "58%" }} /><span style={{ height: "44%" }} /><span style={{ height: "82%" }} /><span style={{ height: "64%" }} /><span style={{ height: "94%" }} /><b>RISK / 04.8</b></div>}
    <div className="visual-caption">SYNTHETIC RESEARCH VIEW / NOT A PRODUCTION SCREEN</div>
  </div>
}

function ExploitPath() {
  const [active, setActive] = useState(1)
  const [paused, setPaused] = useState(false)
  const steps = [
    { index: "01", label: "SURFACE", title: "Find the opening", text: "Map the boundary where an input, tool, or dependency can cross a trust line.", icon: Terminal },
    { index: "02", label: "PROOF", title: "Make the path undeniable", text: "Turn a suspicion into a repeatable path with evidence an engineering team can act on.", icon: Zap },
    { index: "03", label: "CONTROL", title: "Close the loop", text: "Translate the exploit into a durable control: a rule, a guardrail, or a safer default.", icon: ShieldCheck },
  ]
  useEffect(() => { if (paused) return; const timer = window.setInterval(() => setActive((current) => (current + 1) % steps.length), 3600); return () => window.clearInterval(timer) }, [paused, steps.length])
  return <div className="exploit-lab" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="lab-rail" aria-hidden="true"><span className="rail-progress" style={{ transform: `scaleY(${(active + 1) / steps.length})` }} /></div>
    <div className="lab-copy"><p className="eyebrow">THE RESEARCH LOOP / INTERACTIVE</p><h2>Break the system.<br /><em>Show the path.</em></h2><p className="lab-intro">A good finding is not a screenshot of a problem. It is a story with a beginning, a mechanism, and a way out.</p><div className="lab-controls" role="tablist" aria-label="Research loop steps">{steps.map((step, index) => <button key={step.index} className={active === index ? "active" : ""} onClick={() => setActive(index)} role="tab" aria-selected={active === index}><span>{step.index}</span>{step.label}</button>)}</div></div>
    <div className="lab-stage"><div className="stage-readout"><span>THREAT MODEL</span><b>{String(active + 1).padStart(2, "0")} / 03</b></div><div className="signal-map"><div className="signal-center"><Radio size={17} /><span>{steps[active].label}</span></div><div className="signal-ring ring-one" /><div className="signal-ring ring-two" /><div className={`signal-pulse pulse-${active}`} /><div className="map-label map-left">INPUT</div><div className="map-label map-right">CONTROL</div></div><div className="active-step"><div className="step-icon">{(() => { const Icon = steps[active].icon; return <Icon size={22} /> })()}</div><div><span>{steps[active].index} / {steps[active].label}</span><h3>{steps[active].title}</h3><p>{steps[active].text}</p></div></div></div>
  </div>
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    let timeout: number | undefined
    let frame: number | null = null
    const updateScrollState = () => {
      if (frame !== null) return
      frame = window.requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        const pageProgress = max > 0 ? window.scrollY / max : 0
        document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`)
        document.documentElement.style.setProperty("--scroll-progress", `${pageProgress}`)
        document.body.classList.add("is-scrolling")
        window.clearTimeout(timeout)
        timeout = window.setTimeout(() => document.body.classList.remove("is-scrolling"), 180)
        frame = null
      })
    }
    updateScrollState()
    window.addEventListener("scroll", updateScrollState, { passive: true })
    window.addEventListener("resize", updateScrollState)
    return () => { window.removeEventListener("scroll", updateScrollState); window.removeEventListener("resize", updateScrollState); window.clearTimeout(timeout); if (frame !== null) window.cancelAnimationFrame(frame) }
  }, [])
  useEffect(() => { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("is-visible") }), { threshold: 0.14 }); document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element)); return () => observer.disconnect() }, [])
  useEffect(() => { const updatePerspective = () => document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((element) => { const box = element.getBoundingClientRect(); const center = (box.top + box.height / 2) / window.innerHeight; const distance = Math.max(-1, Math.min(1, .5 - center)); element.style.setProperty("--tilt-x", `${distance * 7}deg`); element.style.setProperty("--tilt-y", `${distance * -2.5}deg`); element.style.setProperty("--depth", `${Math.max(0, 1 - Math.abs(distance)) * 18}px`) }); updatePerspective(); window.addEventListener("scroll", updatePerspective, { passive: true }); window.addEventListener("resize", updatePerspective); return () => { window.removeEventListener("scroll", updatePerspective); window.removeEventListener("resize", updatePerspective) } }, [])
  return <div className="portfolio-shell">
    <CyberField />
    <div className="noise" aria-hidden="true" />
    <header className="site-header"><a className="brand" href="#top" aria-label="Pruthu Raut home"><span className="brand-mark">PR</span><span className="brand-name">PRUTHU RAUT <i>/</i> SECURITY</span></a><button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="site-nav"><span>{menuOpen ? "CLOSE" : "MENU"}</span><i /></button><nav id="site-nav" className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation"><a href="#work" onClick={() => setMenuOpen(false)}>Work <span>01</span></a><a href="#experience" onClick={() => setMenuOpen(false)}>Experience <span>02</span></a><a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications <span>03</span></a><a href="#about" onClick={() => setMenuOpen(false)}>About <span>04</span></a></nav><a className="header-status" href="mailto:rautpruthu@gmail.com"><i /> OPEN TO SIGNAL</a></header>
    <main id="top">
      <section className="hero-section"><div className="hero-copy" data-reveal><p className="eyebrow">SECURITY RESEARCHER / PRODUCT SECURITY</p><h1>I like to break<br /><em>systems</em> for fun<br />and profit.</h1><p className="hero-lede">I build and break the systems behind modern software — from binary exploit research to secure-by-default AI development.</p><div className="hero-actions"><a className="primary-button" href="#work">Explore the work <ArrowDown size={17} /></a><a className="text-link" href="mailto:rautpruthu@gmail.com">Start a conversation <ArrowUpRight size={16} /></a></div><div className="hero-note"><span>FIELD NOTE / 001</span><b>“With great AI usage comes great electricity bills.”</b></div></div><div className="hero-instrument" data-reveal><div className="instrument-header"><span>PR / RESEARCH INSTRUMENT</span><span>COLLEGE PARK, MD</span></div><div className="instrument-grid"><div className="instrument-orb"><div className="orb-core-large"><span>PR</span></div><div className="orb-satellite sat-one" /><div className="orb-satellite sat-two" /><div className="orb-satellite sat-three" /></div><div className="instrument-readout"><span>ACTIVE SURFACE</span><strong>ATTACK<br />SURFACE</strong><small>STATUS <b>MONITORING</b></small></div></div><div className="instrument-footer"><span>LAT 38.9869° N / LONG 76.9426° W</span><span>SCROLL TO INTERROGATE <ArrowDown size={14} /></span></div></div></section>
      <section className="scroll-sequence" data-scroll-sequence aria-label="Security research sequence"><div className="scroll-sequence-sticky"><div className="sequence-header"><span>SCROLL-DRIVEN RESEARCH MODEL</span><span>PROGRESS <b>LIVE</b></span></div><div className="sequence-stage"><div className="sequence-core"><span>PR</span><i /><i /><i /></div><div className="sequence-line line-a" /><div className="sequence-line line-b" /><div className="sequence-node node-surface"><small>01</small><b>Surface</b><span>Find the trust boundary</span></div><div className="sequence-node node-proof"><small>02</small><b>Proof</b><span>Make the path repeatable</span></div><div className="sequence-node node-control"><small>03</small><b>Control</b><span>Ship the safer default</span></div></div><div className="sequence-footer"><span>SCROLL TO TRACE THE PATH</span><span>OFFENSIVE SIGNAL → DEFENSIVE CONTROL</span></div></div></section>
      <section className="proof-band" id="hall-of-fame" data-reveal><div className="proof-intro"><span>DISCLOSURE LOG</span><p>Research, reports, and responsible disclosure across teams that build at scale.</p></div><div className="hall-grid">{hallOfFame.map((company) => <div className={`company-mark mark-${company.tone}`} key={company.name}><img src={`https://cdn.simpleicons.org/${company.logo}`} alt="" loading="lazy" /><span>{company.mark}</span><small>{company.name}</small></div>)}</div></section>
      <section className="lab-section section-pad" id="research"><ExploitPath /></section>
      <section className="work-section section-pad" id="work"><div className="section-heading" data-reveal><div><p className="eyebrow">SELECTED WORK / CASE FILES</p><h2>Not just findings.<br /><em>Full signal.</em></h2></div><p>Each project is a working argument: here was the risk, this was the mechanism, and this is what a stronger system looks like.</p></div><div className="project-list">{projects.map((project) => <article className={`project-case accent-${project.accent}`} key={project.name} data-reveal data-tilt><div className="project-meta"><span>{project.number}</span><span>{project.type}</span><span>CASE FILE / OPEN</span></div><div className="project-main"><ProjectVisual kind={project.visual} /><div className="project-copy"><h3>{project.name}</h3><p className="project-summary">{project.summary}</p><p className="project-detail">{project.detail}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href="mailto:rautpruthu@gmail.com?subject=Project%20case%20file%20request">Request the case file <ArrowUpRight size={15} /></a><span><Check size={14} /> Video slot ready</span></div></div></div><div className="video-slot"><div><Play size={15} /><span>PROJECT VIDEO / DROP MEDIA HERE LATER</span></div><small>Placeholder keeps the story ready for your future walkthrough.</small></div></article>)}</div></section>
      <section className="quote-section"><div className="quote-orbit" aria-hidden="true"><span>“</span></div><blockquote>Security is not a vibe.<br /><em>It is a path you can prove.</em></blockquote><span className="quote-credit">— field note / pruthu raut</span></section>
      <section className="experience-section section-pad" id="experience"><div className="section-heading" data-reveal><div><p className="eyebrow">FIELD NOTES / EXPERIENCE</p><h2>Close to the<br /><em>hard problems.</em></h2></div><p>Different environments, same instinct: find the boundary, understand the mechanism, and leave the system better than I found it.</p></div><div className="experience-track">{experience.map((item, index) => <article className="experience-item" key={item.company} data-reveal data-tilt><div className="experience-index"><span>0{index + 1}</span><i /></div><div className="experience-date">{item.year}</div><div className="experience-body"><div className="experience-company"><span>{item.company}</span><b>{item.signal}</b></div><h3>{item.role}</h3><p>{item.detail}</p><div className="experience-tags">{experienceDetails[item.company].map((tag) => <span key={tag}>{tag}</span>)}</div></div><ChevronRight className="experience-arrow" size={22} /></article>)}</div></section>
      <section className="numbers-section section-pad" data-reveal><div><strong>100<span>+</span></strong><small>VULNERABILITIES<br />REPORTED</small></div><div><strong>30<span>+</span></strong><small>ENTERPRISE<br />PROGRAMS</small></div><div><strong>500<span>+</span></strong><small>FINDINGS<br />VALIDATED</small></div><div><strong>4.0</strong><small>GRADUATE<br />GPA</small></div></section>
      <section className="certifications-section section-pad" id="certifications"><div className="section-heading" data-reveal><div><p className="eyebrow">CREDENTIALS / SIGNAL CHECK</p><h2>Proof of<br /><em>practice.</em></h2></div><p>Certifications and field wins are part of the operating system — useful signals, never a substitute for doing the work.</p></div><div className="certification-console">{certifications.map((cert, index) => <article className="main-cert-card" key={cert} data-reveal><span className="cert-id">CERT / 0{index + 1}</span><div className="cert-seal">{String(index + 1).padStart(2, "0")}</div><div><h3>{cert}</h3><p>VERIFIED FIELD SIGNAL <span>•</span> AVAILABLE ON REQUEST</p></div><Check size={17} /></article>)}</div></section>
      <section className="about-section section-pad" id="about"><div className="about-main-grid"><div data-reveal><p className="eyebrow">ABOUT THE OPERATOR / PRUTHU RAUT</p><h2>Research with<br /><em>a builder&apos;s exit.</em></h2><p className="about-lede">Cybersecurity researcher focused on penetration testing, vulnerability research, exploit development, cloud security, and secure-by-default AI tooling.</p><p className="about-copy">Currently pursuing an M.Eng. in Cybersecurity at the University of Maryland, College Park. I move comfortably from reverse engineering a binary to designing the guardrails that keep an engineering team from repeating the same mistake.</p></div><div className="skill-array" data-reveal><p className="eyebrow">CURRENT LOADOUT</p><div><span>APPSEC</span><span>REVERSE ENGINEERING</span><span>CLOUD</span><span>AI SECURITY</span><span>THREAT MODELING</span><span>INCIDENT RESPONSE</span><span>PYTHON / BASH</span><span>LINUX / WINDOWS</span><span>BURP / GHIDRA</span><span>MITRE ATT&CK</span></div></div></div><div className="about-principles" data-reveal><div><span>01</span><h3>Prove, do not posture.</h3><p>Every claim should resolve into an artifact, a reproduction, or a measurable improvement.</p></div><div><span>02</span><h3>Make security legible.</h3><p>The best defensive work gives builders a clear next move without hiding the technical truth.</p></div><div><span>03</span><h3>Close the loop.</h3><p>Find the edge case, explain the mechanism, ship the fix, and verify it stayed fixed.</p></div></div></section>
      <section className="contact-section section-pad" id="contact" data-reveal><p className="eyebrow">OPEN CHANNEL / 04</p><h2>Have a hard<br /><em>problem?</em></h2><p>Bring the system, the strange behavior, or the question nobody has isolated yet.</p><a className="primary-button" href="mailto:rautpruthu@gmail.com">Let&apos;s test it <ArrowUpRight size={17} /></a><div className="social-links"><a href="https://github.com/pruthuraut" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="https://www.linkedin.com/in/pruthu-raut/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a><a href="mailto:rautpruthu@gmail.com"><Mail size={15} /> Email</a></div></section>
    </main>
    <footer className="site-footer"><span>© 2026 PRUTHU RAUT</span><span>BREAK / PROVE / HARDEN</span><span>BUILT WITH CURIOSITY + TOO MUCH POWER</span></footer>
  </div>
}
