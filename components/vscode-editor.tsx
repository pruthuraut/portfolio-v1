"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { X, ExternalLink, Github, Linkedin, Mail, Shield, Trophy, Bug } from "lucide-react"

interface VSCodeEditorProps {
  activeFile: string
}

export function VSCodeEditor({ activeFile }: VSCodeEditorProps) {
  const getFileContent = () => {
    switch (activeFile) {
      case "README.md":
        return <ReadmeContent />
      case "experience.json":
        return <ExperienceContent />
      case "honeytrap.py":
        return <HoneyTrapContent />
      case "vibeguard.md":
        return <VibeGuardContent />
      case "obsidian-guard.js":
        return <ObsidianGuardContent />
      case "deep-recon.py":
        return <DeepReconContent />
      case "rakshak-ml.py":
        return <RakshakContent />
      case "s-indicator.cpp":
        return <SIndicatorContent />
      case "dorky-vert.js":
        return <DorkyVertContent />
      case "cves.txt":
        return <CVEsContent />
      case "ctf-wins.json":
        return <CTFWinsContent />
      case "certifications.md":
        return <CertificationsContent />
      case "contact.py":
        return <ContactContent />
      default:
        return <ReadmeContent />
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-background">
      {/* Tab Bar */}
      <div className="h-9 bg-card border-b border-border flex items-center">
        <div className="flex items-center bg-background border-r border-border px-3 h-full">
          <span className="text-sm">{activeFile}</span>
          <Button variant="ghost" size="sm" className="w-4 h-4 p-0 ml-2 hover:bg-destructive/20">
            <X className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Editor Content */}
      <div className="flex-1 overflow-auto p-6 relative z-10 max-h-[calc(100vh-8rem)]">{getFileContent()}</div>
    </div>
  )
}

function ReadmeContent() {
  return (
    <div className="space-y-6 font-mono">
      <div className="border-l-4 border-primary pl-4">
        <h1 className="text-3xl font-bold text-primary mb-2"># Pruthu Raut</h1>
        <p className="text-lg text-muted-foreground">
          <span className="text-[#39ff14]">$</span> whoami
        </p>
        <p className="text-accent">Cybersecurity Specialist | Bug Bounty Hunter | Security Researcher</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 cyber-border bg-card/50 backdrop-blur">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-[#39ff14]" />
            <h3 className="font-semibold">Security Research</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Reported 100+ vulnerabilities across 30+ enterprise programs including NASA, BBC, WHO, and Apple
          </p>
        </Card>

        <Card className="p-4 cyber-border bg-card/50 backdrop-blur">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-[#ffd60a]" />
            <h3 className="font-semibold">CTF Champion</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            HTB Mumbai, ACECTF, REDFOXCTF, and ABITRGIT wins
          </p>
        </Card>

        <Card className="p-4 cyber-border bg-card/50 backdrop-blur">
          <div className="flex items-center gap-2 mb-2">
            <Bug className="w-5 h-5 text-[#ff073a]" />
            <h3 className="font-semibold">CVE Researcher</h3>
          </div>
            <p className="text-sm text-muted-foreground">Published CVE-2025-46173 and CVE-2025-28121</p>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-primary">## Quick Commands</h2>
        <p className="text-sm text-muted-foreground">
          Click the terminal icon in the sidebar to open terminal, then try these commands:
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-card/30 rounded border font-mono text-sm">
            <span className="text-[#39ff14]">$</span> cat experience.json
          </div>
          <div className="p-2 bg-card/30 rounded border font-mono text-sm">
            <span className="text-[#39ff14]">$</span> ls projects/
          </div>
          <div className="p-2 bg-card/30 rounded border font-mono text-sm">
            <span className="text-[#39ff14]">$</span> grep -r "CVE" achievements/
          </div>
          <div className="p-2 bg-card/30 rounded border font-mono text-sm">
            <span className="text-[#39ff14]">$</span> python3 contact.py
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-primary">## Connect</h2>
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-transparent"
            onClick={() => window.open("https://github.com/pruthuraut", "_blank")}
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-transparent"
            onClick={() => window.open("https://linkedin.com/in/pruthu-raut", "_blank")}
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-transparent"
            onClick={() => window.open("mailto:rautpruthu@gmail.com", "_blank")}
          >
            <Mail className="w-4 h-4" />
            rautpruthu@gmail.com
          </Button>
        </div>
      </div>
    </div>
  )
}

function ExperienceContent() {
  return (
    <div className="font-mono text-sm space-y-4">
      <div className="text-muted-foreground">// experience.json</div>
      <pre className="text-foreground">
        {`{
  "current_position": {
    "title": "Product Security Engineer Intern",
    "company": "Illumio",
    "location": "Sunnyvale, CA",
    "duration": "May 2026 – Present",
    "achievements": [
      "Built an LLM-powered threat modeling and validation harness",
      "Validated 500+ security findings across Linux and Windows binaries",
      "Created secure-coding-by-default workflows with pre-commit hooks"
    ]
  },
  "previous_roles": [
    {
      "title": "Security Researcher",
      "company": "Bugcrowd",
      "location": "United States, Remote",
      "duration": "Jan 2024 – Aug 2025",
      "focus": ["RCE", "SQL Injection", "Blind SSRF", "Responsible Disclosure"]
    },
    {
      "title": "Windows Internals Security Researcher Intern",
      "company": "CoE-CNDS Labs",
      "location": "Mumbai, India",
      "duration": "Jun 2024 – Apr 2025",
      "focus": ["CVE Research", "Exploit Development", "Windows Kernel"]
    },
    {
      "title": "Vulnerability Assessment Penetration Testing Intern",
      "company": "GreenCurve Securities",
      "location": "India",
      "duration": "Jan 2024 – Apr 2024",
      "achievements": ["20+ critical vulnerabilities identified", "40% security posture improvement"]
    }
  ],
  "education": {
    "degree": "M.Eng. in Cybersecurity",
    "university": "University of Maryland, College Park",
    "duration": "Aug 2025 – May 2027",
    "gpa": 4.0
  }
}`}
      </pre>
    </div>
  )
}

function VibeGuardContent() {
  return (
    <div className="font-mono text-sm space-y-5">
      <div className="text-muted-foreground"># vibeguard.md - Secure coding agent</div>
      <Card className="p-5 bg-card/60 cyber-border">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <p className="text-xs text-primary mb-2">IN-REPO SECURITY CONTROL PLANE</p>
            <h2 className="text-2xl font-bold">VibeGuard</h2>
          </div>
          <Shield className="w-7 h-7 text-[#39ff14]" />
        </div>
        <p className="text-muted-foreground leading-7 max-w-2xl">
          A secure coding agent that sits inside the repository, guides LLM-generated code toward safer patterns, and blocks vulnerable changes before they reach the codebase.
        </p>
        <div className="grid md:grid-cols-3 gap-3 mt-6">
          <div className="rounded border border-border bg-background/70 p-3"><p className="text-primary text-xs mb-1">01 / GUARD</p><p className="text-xs text-muted-foreground">Secure-by-default prompts and code review guardrails.</p></div>
          <div className="rounded border border-border bg-background/70 p-3"><p className="text-primary text-xs mb-1">02 / BLOCK</p><p className="text-xs text-muted-foreground">Pre-commit hooks stop vulnerable patterns before merge.</p></div>
          <div className="rounded border border-border bg-background/70 p-3"><p className="text-primary text-xs mb-1">03 / SUPPLY</p><p className="text-xs text-muted-foreground">SCA checks and safer dependency selection in the loop.</p></div>
        </div>
        <div className="flex flex-wrap gap-2 mt-6"><Badge variant="secondary">LLM guardrails</Badge><Badge variant="secondary">Pre-commit</Badge><Badge variant="secondary">SCA</Badge><Badge variant="secondary">Secure dependencies</Badge></div>
      </Card>
    </div>
  )
}

function HoneyTrapContent() {
  return (
    <div className="font-mono text-sm space-y-4">
      <div className="text-muted-foreground"># honeytrap.py - Advanced Honeypot with Azure Sentinel Integration</div>
      <div className="space-y-4">
        <Card className="p-4 bg-card/50">
          <h3 className="font-bold text-primary mb-2">🍯 HoneyTrap Project</h3>
          <div className="space-y-2 text-sm">
            <p>• Built honeypot server integrated with Azure Sentinel SIEM</p>
            <p>• Simulates targeted attacks and monitors adversary activity in real time</p>
            <p>• Applied AI-driven analytics to detect attacker TTPs</p>
            <p>• Developed SOAR automation workflows for incident response</p>
            <p>• Reduced MTTD and MTTR significantly</p>
            <p>• Provided visibility by correlating honeypot data with enterprise logs</p>
          </div>
          <div className="mt-4 flex gap-2">
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">Azure Sentinel</Badge>
            <Badge variant="secondary">SIEM</Badge>
            <Badge variant="secondary">SOAR</Badge>
          </div>
          <div className="mt-4 p-4 bg-background rounded border">
            <div className="text-xs text-muted-foreground mb-2">📸 Project Screenshot</div>
            <div className="h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
              [Space for HoneyTrap Dashboard Screenshot]
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

function ObsidianGuardContent() {
  return (
    <div className="font-mono text-sm space-y-4">
      <div className="text-muted-foreground">// obsidian-guard.js - Two-Tier Security Framework</div>
      <Card className="p-4 bg-card/50">
        <h3 className="font-bold text-primary mb-2">🛡️ Obsidian Guard</h3>
        <div className="space-y-2 text-sm">
          <p>• Two-tier security framework (white-box + black-box testing)</p>
          <p>• Identifies enterprise vulnerabilities across applications and infrastructure</p>
          <p>• Integrated AWS Lambda for automated security scanning</p>
          <p>• S3 for secure vulnerability data storage</p>
          <p>• Aligned with NIST CSF and OWASP Top 10</p>
          <p>• 30+ vulnerabilities reported with 90%+ detection accuracy</p>
        </div>
        <div className="mt-4 flex gap-2">
          <Badge variant="secondary">JavaScript</Badge>
          <Badge variant="secondary">AWS Lambda</Badge>
          <Badge variant="secondary">S3</Badge>
          <Badge variant="secondary">NIST CSF</Badge>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="mt-4 gap-2 bg-transparent"
          onClick={() => window.open("https://github.com/pruthuraut/obsidian-guard", "_blank")}
        >
          <ExternalLink className="w-4 h-4" />
          View Live Demo
        </Button>
      </Card>
    </div>
  )
}

function DeepReconContent() {
  return (
    <div className="font-mono text-sm space-y-4">
      <div className="text-muted-foreground"># deep_recon_multithread.py - Bug Bounty Automation Tool</div>
      <Card className="p-4 bg-card/50">
        <h3 className="font-bold text-primary mb-2">🔍 Deep Recon</h3>
        <div className="space-y-2 text-sm">
          <p>• Multithreaded reconnaissance automation tool</p>
          <p>• Designed for bug bounty hunting efficiency</p>
          <p>• Automated subdomain enumeration and vulnerability scanning</p>
          <p>• Integrates multiple reconnaissance techniques</p>
          <p>• Significantly reduces manual reconnaissance time</p>
        </div>
        <div className="mt-4 flex gap-2">
          <Badge variant="secondary">Python</Badge>
          <Badge variant="secondary">Multithreading</Badge>
          <Badge variant="secondary">Bug Bounty</Badge>
          <Badge variant="secondary">Automation</Badge>
        </div>
      </Card>
    </div>
  )
}

function RakshakContent() {
  return (
    <div className="font-mono text-sm space-y-4">
      <div className="text-muted-foreground"># rakshak.py - ML Violence Detection System</div>
      <Card className="p-4 bg-card/50">
        <h3 className="font-bold text-primary mb-2">🚨 Rakshak</h3>
        <div className="space-y-2 text-sm">
          <p>• Machine Learning project for violence detection</p>
          <p>• Real-time video analysis for violent behavior</p>
          <p>• Automatic alert system to police stations</p>
          <p>• Computer vision and deep learning implementation</p>
          <p>• Designed for public safety enhancement</p>
        </div>
        <div className="mt-4 flex gap-2">
          <Badge variant="secondary">Python</Badge>
          <Badge variant="secondary">Machine Learning</Badge>
          <Badge variant="secondary">Computer Vision</Badge>
          <Badge variant="secondary">Public Safety</Badge>
        </div>
      </Card>
    </div>
  )
}

function SIndicatorContent() {
  return (
    <div className="font-mono text-sm space-y-4">
      <div className="text-muted-foreground">// s-indicator.cpp - Smart Camera Signal System</div>
      <Card className="p-4 bg-card/50">
        <h3 className="font-bold text-primary mb-2">🚦 S-Indicator</h3>
        <div className="space-y-2 text-sm">
          <p>• Smart Camera Signal System using Machine Learning</p>
          <p>• Detects traffic signs for road safety</p>
          <p>• Real-time traffic sign recognition</p>
          <p>• Enhances driver awareness and safety</p>
          <p>• Computer vision implementation in C++</p>
        </div>
        <div className="mt-4 flex gap-2">
          <Badge variant="secondary">C++</Badge>
          <Badge variant="secondary">Machine Learning</Badge>
          <Badge variant="secondary">Computer Vision</Badge>
          <Badge variant="secondary">Traffic Safety</Badge>
        </div>
      </Card>
    </div>
  )
}

function DorkyVertContent() {
  return (
    <div className="font-mono text-sm space-y-4">
      <div className="text-muted-foreground">// dorky-vert.js - Google Hacking Tool</div>
      <Card className="p-4 bg-card/50">
        <h3 className="font-bold text-primary mb-2">🔎 Dorky Vert</h3>
        <div className="space-y-2 text-sm">
          <p>• Google hacking tool for basic enumeration</p>
          <p>• Finds dorks for reconnaissance purposes</p>
          <p>• Web-based interface for easy access</p>
          <p>• Streamlines OSINT gathering process</p>
        </div>
        <div className="mt-4 flex gap-2">
          <Badge variant="secondary">JavaScript</Badge>
          <Badge variant="secondary">Google Dorking</Badge>
          <Badge variant="secondary">OSINT</Badge>
          <Badge variant="secondary">Enumeration</Badge>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="mt-4 gap-2 bg-transparent"
          onClick={() => window.open("https://dorky-vert.vercel.app/", "_blank")}
        >
          <ExternalLink className="w-4 h-4" />
          dorky-vert.vercel.app
        </Button>
      </Card>
    </div>
  )
}

function CVEsContent() {
  return (
    <div className="font-mono text-sm space-y-4">
      <div className="text-muted-foreground"># cves.txt - Published CVE Research</div>
      <div className="space-y-4">
        <Card className="p-4 bg-card/50 border-l-4 border-red-500">
          <h3 className="font-bold text-red-400 mb-2">CVE-2025-46173</h3>
          <p className="text-sm text-muted-foreground mb-2">Critical Vulnerability Discovery</p>
          <div className="p-4 bg-background rounded border">
            <div className="text-xs text-muted-foreground mb-2">📸 CVE Certificate</div>
            <div className="h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
              [Space for CVE-2025-46173 Certificate]
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-card/50 border-l-4 border-red-500">
          <h3 className="font-bold text-red-400 mb-2">CVE-2025-28121</h3>
          <p className="text-sm text-muted-foreground mb-2">Security Research Publication</p>
          <div className="p-4 bg-background rounded border">
            <div className="text-xs text-muted-foreground mb-2">📸 CVE Certificate</div>
            <div className="h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
              [Space for CVE-2025-28121 Certificate]
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-card/50">
          <h3 className="font-bold text-primary mb-2">📄 Microsoft Excel RCE Research</h3>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Introduction:</strong> Microsoft Excel macro exploitation research
            </p>
            <p>• Analyzed remote code execution through malicious macros</p>
            <p>• Documented bypass techniques for macro security</p>
            <p>• Provided detailed technical analysis of RCE attacks</p>
            <p>• Contributed to understanding of Excel-based threats</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

function CTFWinsContent() {
  return (
    <div className="font-mono text-sm space-y-4">
      <div className="text-muted-foreground">// ctf-wins.json - Capture The Flag Victories</div>
      <div className="space-y-4">
        <Card className="p-4 bg-card/50 border-l-4 border-yellow-500">
          <h3 className="font-bold text-yellow-400 mb-2">🏆 Hack The Box Mumbai CTF Winner</h3>
          <p className="text-sm text-muted-foreground mb-2">Achieved root access in Boot-to-Root challenge</p>
          <div className="p-4 bg-background rounded border">
            <div className="text-xs text-muted-foreground mb-2">📸 Winning Photo</div>
            <div className="h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
              [Space for HTB Mumbai CTF Winning Photo]
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-card/50 border-l-4 border-yellow-500">
          <h3 className="font-bold text-yellow-400 mb-2">🏆 ACECTF Winner</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Cloud, Reverse Engineering, OSINT, Web Security, Cryptography
          </p>
          <div className="p-4 bg-background rounded border">
            <div className="text-xs text-muted-foreground mb-2">📸 Certificate</div>
            <div className="h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
              [Space for ACECTF Certificate]
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-card/50 border-l-4 border-yellow-500">
          <h3 className="font-bold text-yellow-400 mb-2">🏆 REDFOXCTF Winner</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Victory among 1000+ participants - Pwn, Forensics, Android, Cryptography
          </p>
          <div className="p-4 bg-background rounded border">
            <div className="text-xs text-muted-foreground mb-2">📸 Certificate</div>
            <div className="h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
              [Space for REDFOXCTF Certificate]
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-card/50 border-l-4 border-yellow-500">
          <h3 className="font-bold text-yellow-400 mb-2">🏆 ABITRGIT CTF Winner</h3>
          <p className="text-sm text-muted-foreground mb-2">1st place - Web, Network, and Exploit challenges</p>
          <div className="p-4 bg-background rounded border">
            <div className="text-xs text-muted-foreground mb-2">📸 Certificate</div>
            <div className="h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
              [Space for ABITRGIT CTF Certificate]
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-card/50 border-l-4 border-purple-500">
          <h3 className="font-bold text-purple-400 mb-2">🎯 ICARUS-CTF Host</h3>
          <p className="text-sm text-muted-foreground mb-2">Private CTF - Cryptography, Steganography, Web</p>
          <div className="flex gap-2 mt-2">
            <Badge variant="secondary">CRYPTOGRAPHY</Badge>
            <Badge variant="secondary">STEGANOGRAPHY</Badge>
            <Badge variant="secondary">WEB</Badge>
          </div>
        </Card>

        <Card className="p-4 bg-card/50 border-l-4 border-blue-500">
          <h3 className="font-bold text-blue-400 mb-2">⚖️ Recursion 6 Judge</h3>
          <p className="text-sm text-muted-foreground mb-2">Served as judge for cybersecurity competition</p>
          <div className="p-4 bg-background rounded border">
            <div className="text-xs text-muted-foreground mb-2">📸 Judge Photos</div>
            <div className="h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
              [Space for Recursion 6 Judge Photos]
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

function CertificationsContent() {
  return (
    <div className="font-mono text-sm space-y-4">
      <div className="text-muted-foreground"># certifications.md - Professional Certifications</div>
      <div className="space-y-4">
        <Card className="p-4 bg-card/50 border-l-4 border-green-500">
          <h3 className="font-bold text-green-400 mb-2">🎓 Certified Ethical Hacker (CEH)</h3>
          <p className="text-sm text-muted-foreground mb-2">EC-Council Certification</p>
          <div className="p-4 bg-background rounded border">
            <div className="text-xs text-muted-foreground mb-2">📸 CEH Certificate</div>
            <div className="h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
              [Space for CEH Certificate]
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-card/50 border-l-4 border-green-500">
          <h3 className="font-bold text-green-400 mb-2">🎓 Junior Penetration Tester (eJPT v2)</h3>
          <p className="text-sm text-muted-foreground mb-2">eLearnSecurity Certification</p>
          <div className="p-4 bg-background rounded border">
            <div className="text-xs text-muted-foreground mb-2">📸 eJPT Certificate</div>
            <div className="h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
              [Space for eJPT Certificate]
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-card/50">
          <h3 className="font-bold text-primary mb-2">🏅 SBI Life Hackathon Finalist</h3>
          <p className="text-sm text-muted-foreground">
            Designed innovative cybersecurity use cases with real-world threat modeling
          </p>
        </Card>
      </div>
    </div>
  )
}

function ContactContent() {
  return (
    <div className="font-mono text-sm space-y-4">
      <div className="text-muted-foreground"># contact.py - Get In Touch</div>
      <pre className="text-foreground">
        {`#!/usr/bin/env python3
"""
Contact Information for Pruthu Raut
Cybersecurity Specialist & Security Researcher
"""

class Contact:
    def __init__(self):
        self.name = "Pruthu Raut"
        self.email = "rautpruthu@gmail.com"
        self.website = "pruthu.vercel.app"
        self.github = "github.com/pruthuraut"
        self.linkedin = "linkedin.com/in/pruthuraut"
        self.location = "University of Maryland, College Park"
        self.specialties = [
            "Security Research",
            "Bug Bounty Hunting", 
            "Vulnerability Assessment",
            "Penetration Testing",
            "CVE Research",
            "Exploit Development"
        ]
    
    def send_message(self, subject, message):
        print(f"[+] Initiating secure communication...")
        print(f"[+] Encrypting message with PGP...")
        print(f"[+] Subject: {subject}")
        print(f"[+] Message sent successfully!")
        print(f"[+] Response time: Usually within 24 hours")
        return True

if __name__ == "__main__":
    contact = Contact()
    print("=" * 50)
    print("SECURE COMMUNICATION ESTABLISHED")
    print("=" * 50)
    print(f"Name: {contact.name}")
    print(f"Email: {contact.email}")
    print(f"Website: {contact.website}")
    print("=" * 50)
    print("Available for:")
    for specialty in contact.specialties:
        print(f"  • {specialty}")
    print("=" * 50)
`}
      </pre>

      <div className="flex gap-4 mt-6">
        <Button
          className="gap-2 bg-primary hover:bg-primary/80"
          onClick={() => window.open("mailto:rautpruthu@gmail.com", "_blank")}
        >
          <Mail className="w-4 h-4" />
          Send Email
        </Button>
        <Button
          variant="outline"
          className="gap-2 bg-transparent"
          onClick={() => window.open("https://github.com/pruthuraut", "_blank")}
        >
          <Github className="w-4 h-4" />
          GitHub
        </Button>
        <Button
          variant="outline"
          className="gap-2 bg-transparent"
          onClick={() => window.open("https://linkedin.com/in/pruthuraut", "_blank")}
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </Button>
      </div>
    </div>
  )
}
