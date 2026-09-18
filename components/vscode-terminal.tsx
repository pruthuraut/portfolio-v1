"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { X, Minus, Square } from "lucide-react"

interface VSCodeTerminalProps {
  onClose: () => void
}

export function VSCodeTerminal({ onClose }: VSCodeTerminalProps) {
  const [output, setOutput] = useState<string[]>([
    "Welcome to Pruthu's Cybersecurity Terminal v2.1.0",
    "Type commands to explore the portfolio. Try: whoami, nmap -sV localhost, help",
    "",
  ])
  const [currentCommand, setCurrentCommand] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const executeCommand = async (cmd: string) => {
    if (!cmd.trim()) return

    setIsTyping(true)
    setOutput((prev) => [...prev, `$ ${cmd}`])

    // Add to command history
    setCommandHistory((prev) => [...prev, cmd])
    setHistoryIndex(-1)

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const response = getCommandResponse(cmd.trim())
    setOutput((prev) => [...prev, ...response])
    setIsTyping(false)
  }

  const getCommandResponse = (cmd: string): string[] => {
    switch (cmd) {
      case "help":
        return [
          "Available commands:",
          "  whoami                    - Display user information",
          "  cat experience.json       - Show work experience",
          "  ls projects/              - List all projects",
          '  grep -r "CVE" achievements/ - Search for CVE research',
          "  python3 contact.py        - Display contact information",
          "  nmap -sV localhost        - Simulate network scan",
          "  clear                     - Clear terminal",
          "  help                      - Show this help message",
          "",
        ]
      case "clear":
        setOutput([])
        return []
      case "cat experience.json":
        return [
          "{",
          '  "current_position": "Product Security Engineer Intern @ Illumio",',
          '  "achievements": ["100+ vulnerabilities reported", "500+ findings validated", "NASA, BBC, WHO, Apple"],',
          '  "specialties": ["RCE", "SQLi", "SSRF", "Exploit Development"],',
          '  "education": "M.Eng. Cybersecurity - University of Maryland",',
          '  "certifications": ["CEH", "eJPT v2"]',
          "}",
          "",
        ]
      case "ls projects/":
        return [
          "honeytrap.py          obsidian-guard.js     deep-recon.py",
          "rakshak-ml.py         s-indicator.cpp       dorky-vert.js",
          "excel-rce-research.md icarus-ctf/",
          "",
        ]
      case 'grep -r "CVE" achievements/':
        return [
          "achievements/cves.txt:CVE-2025-46173 - Critical Vulnerability",
          "achievements/cves.txt:CVE-2025-28121 - Security Research",
          "achievements/research.md:Excel RCE Macro Analysis",
          "achievements/publications.md:Windows Internals Exploitation",
          "",
        ]
      case "python3 contact.py":
        return [
          "==================================================",
          "SECURE COMMUNICATION ESTABLISHED",
          "==================================================",
          "Name: Pruthu Raut",
          "Email: rautpruthu@gmail.com",
          "Website: pruthu.vercel.app",
          "GitHub: github.com/pruthuraut",
          "LinkedIn: linkedin.com/in/pruthuraut",
          "==================================================",
          "Available for:",
          "  • Security Research",
          "  • Bug Bounty Hunting",
          "  • Vulnerability Assessment",
          "  • Penetration Testing",
          "  • CVE Research",
          "==================================================",
          "",
        ]
      case "whoami":
        return [
          "pruthu@cybersec:~$ Cybersecurity Specialist",
          "Security Researcher | Bug Bounty Hunter | CVE Researcher",
          "University of Maryland, College Park - M.Eng. Cybersecurity",
          "Specializing in: RCE, SQLi, SSRF, Windows Internals, Exploit Development",
          "",
        ]
      case "nmap -sV localhost":
        return [
          "Starting Nmap 7.94 ( https://nmap.org ) at 2024-01-15 10:30 EST",
          "Nmap scan report for localhost (127.0.0.1)",
          "Host is up (0.00010s latency).",
          "",
          "PORT     STATE SERVICE    VERSION",
          "22/tcp   open  ssh        OpenSSH 8.9p1",
          "80/tcp   open  http       nginx 1.18.0",
          "443/tcp  open  https      nginx 1.18.0 (SSL)",
          "8080/tcp open  http-proxy Burp Suite Professional",
          "3000/tcp open  http       Node.js Express framework",
          "",
          "Service detection performed. Please report any incorrect results.",
          "Nmap done: 1 IP address (1 host up) scanned in 2.45 seconds",
          "",
        ]
      default:
        return [`bash: ${cmd}: command not found`, 'Type "help" for available commands', ""]
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentCommand.trim() && !isTyping) {
      executeCommand(currentCommand.trim())
      setCurrentCommand("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentCommand(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setCurrentCommand("")
        } else {
          setHistoryIndex(newIndex)
          setCurrentCommand(commandHistory[newIndex])
        }
      }
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [output])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="h-64 bg-card border-t border-border flex flex-col">
      {/* Terminal Header */}
      <div className="h-8 bg-muted border-b border-border flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-sm">
          <span>Terminal</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="w-6 h-6 p-0">
            <Minus className="w-3 h-3" />
          </Button>
          <Button variant="ghost" size="sm" className="w-6 h-6 p-0">
            <Square className="w-3 h-3" />
          </Button>
          <Button variant="ghost" size="sm" className="w-6 h-6 p-0" onClick={onClose}>
            <X className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Terminal Content */}
      <div ref={terminalRef} className="flex-1 p-4 font-mono text-sm overflow-auto bg-background">
        {output.map((line, index) => (
          <div key={index} className={line.startsWith("$") ? "text-[#39ff14]" : "text-foreground"}>
            {line}
          </div>
        ))}

        {!isTyping && (
          <div className="flex items-center">
            <span className="text-[#39ff14] mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyDown={handleKeyPress}
              className="bg-transparent border-none outline-none flex-1 text-foreground"
              placeholder="Enter command..."
              disabled={isTyping}
            />
            <span className="animate-pulse text-[#39ff14]">█</span>
          </div>
        )}
      </div>
    </div>
  )
}
