import { ArrowUpRight, Flag, Github, GraduationCap, Linkedin, Mail, ShieldCheck, Trophy } from "lucide-react"
import { Clock, Counter, Effects, Terminal } from "@/components/fx"
import { arsenal, certs, ctfs, cves, experience, featured, focus, hallOfFame, more, profile, stats } from "@/lib/data"

const nav = [
  ["01", "Hall of Fame", "#fame"],
  ["02", "Work", "#work"],
  ["03", "CTFs", "#ctf"],
  ["04", "Experience", "#experience"],
] as const

function SectionHead({ n, title, kicker, id }: { n: string; title: React.ReactNode; kicker: string; id: string }) {
  return (
    <header className="sec-head" data-reveal>
      <span className="sec-n">
        {n} <i>/</i> {kicker}
      </span>
      <h2 id={id}>{title}</h2>
    </header>
  )
}

function Ext({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  )
}

export default function Page() {
  return (
    <>
      <Effects />
      <a className="skip" href="#main">
        Skip to content
      </a>

      <div className="aurora" aria-hidden>
        <span className="a1" />
        <span className="a2" />
        <span className="a3" />
        <span className="grid-bg" />
      </div>

      <nav className="nav" aria-label="Primary">
        <a href="#top" className="mono-mark" aria-label="Pruthu Raut, home">
          PR<span>.</span>
        </a>
        <ul>
          {nav.map(([n, l, h]) => (
            <li key={h}>
              <a href={h}>
                <span>{n}</span>
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">
          Contact
        </a>
        <details className="menu">
          <summary aria-label="Open menu">
            <span aria-hidden />
            <span aria-hidden />
          </summary>
          <ul>
            {nav.map(([n, l, h]) => (
              <li key={h}>
                <a href={h}>
                  <span>{n}</span>
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact">
                <span>05</span>Contact
              </a>
            </li>
          </ul>
        </details>
      </nav>

      <main id="main">
        {/* ───────── HERO BENTO ───────── */}
        <section id="top" className="hero wrap" aria-labelledby="hero-title">
          <div className="bento">
            <div className="card hero-main" data-reveal>
              <span className="pill">
                <span className="dot" /> {profile.status}
              </span>
              <h1 id="hero-title">
                <span className="name-1">Pruthu</span>
                <span className="name-2">Raut</span>
              </h1>
              <p className="lede">
                Offensive &amp; AI security researcher. I break systems <em>for fun and profit</em> — then turn the
                exploit path into controls that ship.
              </p>
              <div className="cta-row">
                <a href="#work" className="btn btn-primary">
                  See the work <ArrowUpRight size={18} aria-hidden />
                </a>
                <a href={`mailto:${profile.email}`} className="btn btn-ghost">
                  <Mail size={17} aria-hidden /> {profile.email}
                </a>
              </div>
            </div>

            <div className="card w-clock" data-reveal>
              <div className="w-label">
                <span>Local time</span>
                <span className="live">
                  <span className="dot" />
                  Live
                </span>
              </div>
              <Clock tz={profile.timezone} />
              <p className="w-foot">{profile.location} · UMD</p>
            </div>

            <div className="card w-term" data-reveal>
              <div className="term-bar" aria-hidden>
                <i />
                <i />
                <i />
                <span>pruthu@lab: ~</span>
              </div>
              <Terminal />
            </div>

            <div className="card w-stats" data-reveal>
              {stats.map((s) => (
                <div key={s.label} className={`stat t-${s.tone}`}>
                  <span className="stat-v">
                    <Counter to={s.value} suffix={s.suffix} />
                  </span>
                  <span className="stat-l">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="card w-edu" data-reveal>
              <GraduationCap size={22} aria-hidden className="w-ico" />
              <div>
                <p className="w-label">
                  <span>Education</span>
                </p>
                <p className="edu-t">M.Eng. Cybersecurity</p>
                <p className="w-foot">University of Maryland · 2027</p>
              </div>
              <span className="gpa">
                4.0<small>GPA</small>
              </span>
            </div>

            <div className="card w-social" data-reveal>
              <Ext href={profile.github} className="soc">
                <Github size={20} aria-hidden />
                <span>GitHub</span>
                <ArrowUpRight size={15} aria-hidden className="soc-a" />
              </Ext>
              <Ext href={profile.linkedin} className="soc">
                <Linkedin size={20} aria-hidden />
                <span>LinkedIn</span>
                <ArrowUpRight size={15} aria-hidden className="soc-a" />
              </Ext>
            </div>
          </div>

          {/* logo ticker */}
          <div className="ticker" aria-hidden>
            <div className="ticker-track">
              {[...hallOfFame, ...hallOfFame].map((l, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={l.src} alt="" className={l.mono ? "mono" : ""} style={{ height: l.h * 0.62 }} />
              ))}
            </div>
          </div>
        </section>

        {/* ───────── 01 HALL OF FAME ───────── */}
        <section className="wrap sec" aria-labelledby="fame">
          <SectionHead
            n="01"
            kicker="Hall of Fame"
            id="fame"
            title={
              <>
                Credited by the people <em>whose systems</em> I broke.
              </>
            }
          />
          <ul className="fame-grid">
            {hallOfFame.map((l, i) => {
              const inner = (
                <>
                  <span className="fame-idx">{String(i + 1).padStart(2, "0")}</span>
                  <div className="fame-logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.src} alt={`${l.org} logo`} className={l.mono ? "mono" : ""} style={{ height: l.h }} />
                  </div>
                  <div className="fame-txt">
                    <h3>{l.org}</h3>
                    <p>{l.credit}</p>
                  </div>
                  {l.href && <ArrowUpRight size={16} className="fame-a" aria-hidden />}
                </>
              )
              return (
                <li key={l.org} className="card fame" data-reveal style={{ transitionDelay: `${i * 50}ms` }}>
                  {l.href ? (
                    <Ext href={l.href} className="fame-link">
                      {inner}
                    </Ext>
                  ) : (
                    inner
                  )}
                </li>
              )
            })}
          </ul>
        </section>

        {/* ───────── 02 WORK ───────── */}
        <section className="wrap sec" aria-labelledby="work">
          <SectionHead
            n="02"
            kicker="Selected work"
            id="work"
            title={
              <>
                Tools that <em>prove</em> the bug, not just flag it.
              </>
            }
          />

          <div className="feat-grid">
            {featured.map((p, i) => (
              <article key={p.name} className={`card feat t-${p.tone} ${i === 0 ? "feat-lead" : ""}`} data-reveal>
                <div className="feat-top">
                  <span className="kicker">{p.kicker}</span>
                  <span className="feat-n">0{i + 1}</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
                {p.metrics && (
                  <dl className="metrics">
                    {p.metrics.map((m) => (
                      <div key={m.k}>
                        <dt>{m.k}</dt>
                        <dd>{m.v}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                <div className="feat-foot">
                  <ul className="tags">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className="links">
                    {p.repo && (
                      <Ext href={p.repo} className="icon-btn">
                        <Github size={17} aria-hidden />
                        <span className="sr">{p.name} on GitHub</span>
                      </Ext>
                    )}
                    {p.live && (
                      <Ext href={p.live} className="icon-btn">
                        <ArrowUpRight size={17} aria-hidden />
                        <span className="sr">{p.name} live site</span>
                      </Ext>
                    )}
                  </div>
                </div>
                <span className="feat-glow" aria-hidden />
              </article>
            ))}
          </div>

          <ol className="rows">
            {more.map((p, i) => (
              <li key={p.name} data-reveal>
                <Ext href={p.repo ?? p.live ?? profile.github} className={`row t-${p.tone}`}>
                  <span className="row-n">{String(i + 4).padStart(2, "0")}</span>
                  <span className="row-name">{p.name}</span>
                  <span className="row-blurb">{p.blurb}</span>
                  <span className="row-kicker">{p.kicker}</span>
                  <ArrowUpRight size={18} className="row-a" aria-hidden />
                </Ext>
              </li>
            ))}
          </ol>

          <div className="cve-grid">
            {cves.map((c) => (
              <div key={c.id} className="card cve" data-reveal>
                <div className="cve-top">
                  <span className="sev">
                    <ShieldCheck size={14} aria-hidden /> Published CVE
                  </span>
                  <span className="kicker">{c.kind}</span>
                </div>
                <p className="cve-id">{c.id}</p>
                <p className="cve-meta">
                  {c.target} — {c.impact}
                </p>
                <div className="cve-links">
                  <Ext href={c.href}>
                    NVD <ArrowUpRight size={14} aria-hidden />
                  </Ext>
                  <Ext href={c.poc}>
                    PoC <ArrowUpRight size={14} aria-hidden />
                  </Ext>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ───────── 03 CTF ───────── */}
        <section className="wrap sec" aria-labelledby="ctf">
          <SectionHead
            n="03"
            kicker="CTFs & certs"
            id="ctf"
            title={
              <>
                Capture the flag. <em>Keep the flag.</em>
              </>
            }
          />
          <div className="ctf-layout">
            <ol className="card board" data-reveal aria-label="CTF results">
              <li className="board-head" aria-hidden>
                <span>Rank</span>
                <span>Event</span>
                <span>Categories</span>
              </li>
              {ctfs.map((c) => (
                <li key={c.event} className="board-row">
                  <span className={`rank ${c.rank === "1st" ? "gold" : c.rank === "Final" ? "silver" : "win"}`}>
                    {c.rank === "1st" ? <Trophy size={14} aria-hidden /> : <Flag size={14} aria-hidden />}
                    {c.rank}
                  </span>
                  <span className="board-ev">
                    <strong>{c.event}</strong>
                    <small>{c.note}</small>
                  </span>
                  <span className="board-cats">
                    {c.cats.map((t) => (
                      <i key={t}>{t}</i>
                    ))}
                  </span>
                </li>
              ))}
            </ol>
            <div className="cert-col">
              {certs.map((c) => (
                <Ext key={c.short} href={c.href} className="card cert">
                  <span className="cert-short">{c.short}</span>
                  <span className="cert-name">{c.name}</span>
                  <span className="cert-v">
                    Verify credential <ArrowUpRight size={14} aria-hidden />
                  </span>
                </Ext>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── 04 EXPERIENCE ───────── */}
        <section className="wrap sec" aria-labelledby="experience">
          <SectionHead
            n="04"
            kicker="Experience"
            id="experience"
            title={
              <>
                From bug bounty <em>to product security.</em>
              </>
            }
          />
          <ol className="xp">
            {experience.map((x) => (
              <li key={x.org} className="xp-item" data-reveal>
                <div className="xp-when">
                  <span>{x.when}</span>
                  <small>{x.where}</small>
                </div>
                <div className="xp-body">
                  <h3>
                    {x.org} <span>{x.role}</span>
                  </h3>
                  <ul>
                    {x.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="focus-grid">
            {focus.map((f, i) => (
              <div key={f.t} className="card focus" data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="focus-n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>

          <div className="marquee" aria-label="Tools and languages">
            <ul className="marquee-track">
              {[...arsenal, ...arsenal].map((t, i) => (
                <li key={i} aria-hidden={i >= arsenal.length}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────── CONTACT ───────── */}
        <section id="contact" className="wrap contact" aria-labelledby="contact-title">
          <div className="card contact-card" data-reveal>
            <span className="sec-n">
              05 <i>/</i> Contact
            </span>
            <h2 id="contact-title">
              Got something worth <em>breaking?</em>
            </h2>
            <p>Open to security research, product security and AI red-team roles. Responsible disclosure always.</p>
            <a href={`mailto:${profile.email}`} className="mail-big">
              {profile.email}
              <ArrowUpRight aria-hidden />
            </a>
            <div className="contact-links">
              <Ext href={profile.github}>
                <Github size={18} aria-hidden /> GitHub
              </Ext>
              <Ext href={profile.linkedin}>
                <Linkedin size={18} aria-hidden /> LinkedIn
              </Ext>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap foot">
        <span>© {new Date().getFullYear()} Pruthu Raut</span>
        <span className="foot-mid">
          <span className="dot" /> <Clock tz={profile.timezone} compact />
        </span>
        <span>EOF — no flags were harmed.</span>
      </footer>
    </>
  )
}
