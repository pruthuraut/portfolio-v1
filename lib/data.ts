export const profile = {
  name: "Pruthu Raut",
  role: "Offensive Security & AI Security Researcher",
  line: "I like to break systems for fun and profit.",
  location: "College Park, MD",
  timezone: "America/New_York",
  email: "rautpruthu@gmail.com",
  github: "https://github.com/pruthuraut",
  linkedin: "https://www.linkedin.com/in/pruthu-raut/",
  status: "Product Security Engineer Intern @ Illumio",
}

export const stats = [
  { value: 100, suffix: "+", label: "Vulnerabilities reported", tone: "crit" },
  { value: 30, suffix: "+", label: "Enterprise programs", tone: "high" },
  { value: 8, suffix: "", label: "Halls of fame", tone: "med" },
  { value: 2, suffix: "", label: "Published CVEs", tone: "low" },
] as const

export type Logo = {
  org: string
  src: string
  mono?: boolean
  credit: string
  href?: string
  h: number
}

export const hallOfFame: Logo[] = [
  { org: "NASA", src: "/logos/nasa.svg", h: 56, credit: "Vulnerability Disclosure Program — Hall of Fame for flaws in NASA digital assets." },
  { org: "Apple", src: "/logos/apple-logo.svg", h: 52, credit: "Web Server Security Acknowledgements for infrastructure issues.", href: "https://support.apple.com/102774" },
  { org: "World Health Organization", src: "/logos/who.svg", h: 38, credit: "Listed ethical hacker — hyperlink injection on publications.iarc.who.int." },
  { org: "BBC", src: "/logos/bbc.svg", mono: true, h: 30, credit: "Responsible disclosure across BBC web infrastructure." },
  { org: "University of Cambridge", src: "/logos/cambridge.svg", h: 34, credit: "Acknowledged in disclosure records for university systems." },
  { org: "Drexel University", src: "/logos/drexel.svg", mono: true, h: 40, credit: "IT Bug Bounty Hall of Fame — high-risk bugs across *.drexel.edu." },
  { org: "eScan", src: "/logos/escan.png", h: 38, credit: "eScan Vulnerability Disclosure Program Hall of Fame." },
  { org: "Com Olho", src: "/logos/comolho.png", h: 56, credit: "Verified security researcher on the Com Olho disclosure platform." },
]

export type Project = {
  name: string
  repo?: string
  live?: string
  kicker: string
  blurb: string
  tags: string[]
  metrics?: { k: string; v: string }[]
  tone: "crit" | "high" | "med" | "low" | "info"
}

export const featured: Project[] = [
  {
    name: "Nightcrawler",
    repo: "https://github.com/pruthuraut/nightcrawler",
    kicker: "AI security · MCP",
    blurb:
      "AI-driven scanner for Model Context Protocol servers that doesn't just flag risk — it proves it. Taint analysis feeds a SAST→DAST correlation engine that turns static weaknesses into live, oracle-verified exploits.",
    tags: ["Python AST", "tree-sitter", "asyncio", "Claude", "FastAPI", "React"],
    metrics: [
      { k: "Rules", v: "52" },
      { k: "CWEs", v: "18" },
      { k: "DAST engines", v: "4" },
    ],
    tone: "low",
  },
  {
    name: "Bug Bounty Multi-Agent Skills",
    repo: "https://github.com/pruthuraut/BB-skill",
    kicker: "Offensive AI · Recon",
    blurb:
      "A production-grade offensive framework built on TBHM v4: recon, fingerprinting, content discovery and auditing split across specialised agents and a 16-phase master pipeline.",
    tags: ["Multi-agent", "TBHM v4", "Recon", "Python"],
    metrics: [
      { k: "Skills", v: "51" },
      { k: "Subagents", v: "60+" },
      { k: "Phases", v: "16" },
    ],
    tone: "crit",
  },
  {
    name: "Obsedian Guard",
    repo: "https://github.com/pruthuraut/Obsedian-Gaurd",
    live: "https://www.obsedian.live/",
    kicker: "LLM security · Framework",
    blurb:
      "A tiered security framework for LLMs combining white-box and black-box testing, with scanning modules on AWS Lambda and results aggregated on S3.",
    tags: ["LLM", "AWS Lambda", "S3", "Bash"],
    metrics: [
      { k: "Detection", v: "90%+" },
      { k: "High/Crit found", v: "150+" },
    ],
    tone: "info",
  },
]

export const more: Project[] = [
  { name: "Trilux Platform", repo: "https://github.com/pruthuraut/trilux-platform", kicker: "AppSec platform", blurb: "Django + async workers + Next.js dashboard for SAST, taint analysis, SCA, recon and API scanning.", tags: ["Django", "Next.js", "SAST", "SCA"], tone: "high" },
  { name: "vuln-mcp-server", repo: "https://github.com/pruthuraut/vuln-mcp-server", kicker: "AI security · Targets", blurb: "Vulnerable-by-design MCP servers forming a confused-deputy chain — prompt injection, exfiltration, authz bypass.", tags: ["MCP", "Prompt injection"], tone: "crit" },
  { name: "Pentest MCP Servers", repo: "https://github.com/pruthuraut/pentest-mcp-servers", kicker: "Offensive tooling", blurb: "Dockerised FastMCP servers wrapping nmap, ffuf, nuclei, bloodhound, wpscan and more for agent-driven testing.", tags: ["FastMCP", "Docker"], tone: "high" },
  { name: "bb-harness", repo: "https://github.com/pruthuraut/vadapav-ai", kicker: "Recon harness", blurb: "Host-based, checklist-driven recon with 230 TBHM-style checks, scope controls and SQLite session state.", tags: ["Recon", "SQLite"], tone: "med" },
  { name: "POCme", repo: "https://github.com/pruthuraut/pocme", live: "https://pocme.vercel.app", kicker: "Exploit research", blurb: "Turns a CVE ID into technical intelligence and a working proof-of-concept script.", tags: ["Next.js", "Gemini"], tone: "crit" },
  { name: "Threaten", repo: "https://github.com/pruthuraut/threaten", live: "https://threaten-pi.vercel.app", kicker: "Threat modeling", blurb: "AI threat modeling — STRIDE-style analysis with generated data-flow diagrams and trust boundaries.", tags: ["STRIDE", "Mermaid"], tone: "med" },
  { name: "SCA Scanner", repo: "https://github.com/pruthuraut/SCA", live: "https://sca-iota.vercel.app", kicker: "Supply chain", blurb: "SCA + SAST across pip, npm, Maven and Dockerfiles, backed by OSV.dev and NVD risk scoring.", tags: ["OSV", "NVD", "Flask"], tone: "low" },
  { name: "Prompt Injection Tester", repo: "https://github.com/pruthuraut/LLM-Dynamic-scan", kicker: "LLM red teaming", blurb: "Fires prompt-injection payload sets at LLM endpoints and logs every exchange for analysis.", tags: ["LLM", "DAST"], tone: "high" },
  { name: "HoneyTrap", repo: "https://github.com/pruthuraut/HoneyTrap", kicker: "Blue team · SIEM", blurb: "Azure Sentinel SIEM watching an exposed honeypot, geolocating attackers and mapping their tactics.", tags: ["Sentinel", "KQL"], tone: "info" },
  { name: "Excel RCE with Macros", repo: "https://github.com/pruthuraut/Excel-RCE-with-Macros", kicker: "Exploit research", blurb: "Research write-up on weaponised VBA macros and PowerShell delivery for remote code execution.", tags: ["VBA", "PowerShell"], tone: "crit" },
]

export const cves = [
  { id: "CVE-2025-46173", kind: "Stored XSS", target: "Online Exam Mastering System 1.0", impact: "Session hijacking, privilege escalation", href: "https://nvd.nist.gov/vuln/detail/cve-2025-46173", poc: "https://github.com/pruthuraut/CVE-2025-46173" },
  { id: "CVE-2025-28121", kind: "Reflected XSS", target: "Online Exam Mastering System 1.0", impact: "Account takeover via cookie theft", href: "https://nvd.nist.gov/vuln/detail/CVE-2025-28121", poc: "https://github.com/pruthuraut/CVE-2025-28121" },
]

export const ctfs = [
  { rank: "1st", event: "REDFOXCTF", note: "Ranked first of 1000+ players", cats: ["Pwn", "Forensics", "Android", "Crypto"] },
  { rank: "1st", event: "ABITRGIT CTF", note: "First place, advanced exploitation", cats: ["Web", "Network", "Reversing"] },
  { rank: "Win", event: "Hack The Box Mumbai", note: "Rooted the boot-to-root box", cats: ["PrivEsc", "Boot2Root"] },
  { rank: "Win", event: "ACECTF", note: "Full-spectrum solve sheet", cats: ["Cloud", "RE", "OSINT", "Web", "Crypto"] },
  { rank: "Final", event: "SBI Life Hackathon", note: "Finalist — applied threat modeling", cats: ["Threat modeling"] },
]

export const certs = [
  { name: "Certified Ethical Hacker", short: "CEH", href: "https://drive.google.com/file/d/1k7AbNgs2iIRAqAf-pNqZ5vvqLnB-4TM1/view?usp=sharing" },
  { name: "Junior Penetration Tester", short: "eJPT v2", href: "https://drive.google.com/file/d/1HUS_1zDzVDgu76M_xnB9YAbd--9wnw7w/view?usp=sharing" },
]

export const experience = [
  {
    when: "May 2026 — Now",
    org: "Illumio",
    role: "Product Security Engineer Intern",
    where: "Sunnyvale, CA",
    points: [
      "Built an LLM-orchestrated security harness (Claude Opus) automating threat modeling, scanning and true-positive validation.",
      "Triaged 500+ findings from SAST, DAST and binary analysis on Linux and Windows executables.",
      "Found and weaponised zero-days in Windows and Linux binaries with working PoCs.",
      "Shipped a secure-by-default coding agent via pre-commit hooks and custom Semgrep Pro rules.",
    ],
  },
  {
    when: "Jan 2024 — Aug 2025",
    org: "Bugcrowd",
    role: "Security Researcher",
    where: "Remote",
    points: [
      "Reported 100+ vulnerabilities — RCE, SQLi, blind SSRF — across 30+ programs incl. NASA, Apple, WHO, BBC.",
      "Wrote reproducible PoC reports that cut remediation timelines by 30%.",
    ],
  },
  {
    when: "Jun 2024 — Apr 2025",
    org: "CoE-CNDS Labs",
    role: "Windows Internals Security Researcher",
    where: "Mumbai, IN",
    points: [
      "Built PoC exploits for 5 Windows CVEs (LPE, RCE); reversed kernel components in IDA Pro and Ghidra.",
      "Analysed live campaigns (Zerologon, Excel RCE) for blue-team mitigations.",
    ],
  },
  {
    when: "Jan 2024 — Apr 2024",
    org: "GreenCurve Securities",
    role: "VAPT Intern",
    where: "India",
    points: ["50+ scans and pentests with Nessus, Burp Suite and Nmap; 20+ exploitable flaws found."],
  },
]

export const arsenal = [
  "Burp Suite", "Ghidra", "IDA Pro", "Frida", "Semgrep", "Metasploit", "Nuclei", "ffuf", "Nmap", "Wireshark",
  "BloodHound", "Azure Sentinel", "AWS", "Docker", "Kubernetes", "Python", "C", "TypeScript", "PowerShell", "Claude",
]

export const focus = [
  { t: "AI / LLM security", d: "Prompt injection, MCP tool abuse, agent confused-deputy chains." },
  { t: "Exploit development", d: "Windows internals, LPE/RCE, binary zero-days with working PoCs." },
  { t: "Application security", d: "Taint analysis, SAST→DAST correlation, Semgrep rule authoring." },
  { t: "Bug bounty", d: "Web, API and infra bugs at global scale, reported responsibly." },
]
