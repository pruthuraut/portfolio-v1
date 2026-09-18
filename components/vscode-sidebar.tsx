"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Code,
  Shield,
  Trophy,
  Bug,
  Mail,
  Terminal,
  Folder,
  FolderOpen,
  ChevronRight,
  ChevronDown,
} from "lucide-react"

interface VSCodeSidebarProps {
  activeFile: string
  onFileSelect: (file: string) => void
  onTerminalToggle: () => void
}

export function VSCodeSidebar({ activeFile, onFileSelect, onTerminalToggle }: VSCodeSidebarProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(["portfolio"]))

  const toggleFolder = (folder: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folder)) {
      newExpanded.delete(folder)
    } else {
      newExpanded.add(folder)
    }
    setExpandedFolders(newExpanded)
  }

  const files = [
    { name: "README.md", icon: FileText, type: "file" },
    { name: "experience.json", icon: Code, type: "file" },
    {
      name: "projects/",
      icon: Folder,
      type: "folder",
      children: [
        { name: "honeytrap.py", icon: Shield, type: "file" },
        { name: "vibeguard.md", icon: Shield, type: "file" },
        { name: "obsidian-guard.js", icon: Shield, type: "file" },
        { name: "deep-recon.py", icon: Bug, type: "file" },
        { name: "rakshak-ml.py", icon: Shield, type: "file" },
        { name: "s-indicator.cpp", icon: Code, type: "file" },
        { name: "dorky-vert.js", icon: Bug, type: "file" },
      ],
    },
    {
      name: "achievements/",
      icon: Trophy,
      type: "folder",
      children: [
        { name: "cves.txt", icon: Shield, type: "file" },
        { name: "ctf-wins.json", icon: Trophy, type: "file" },
        { name: "certifications.md", icon: Trophy, type: "file" },
      ],
    },
    { name: "contact.py", icon: Mail, type: "file" },
  ]

  const renderFile = (file: any, depth = 0) => {
    const isActive = activeFile === file.name
    const isFolder = file.type === "folder"
    const isExpanded = expandedFolders.has(file.name)

    return (
      <div key={file.name}>
        <Button
          variant="ghost"
          size="sm"
          className={`w-full justify-start text-left h-6 px-2 hover:bg-secondary/50 ${
            isActive ? "bg-primary/20 text-primary" : "text-foreground"
          }`}
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
          onClick={() => {
            if (isFolder) {
              toggleFolder(file.name)
            } else {
              onFileSelect(file.name)
            }
          }}
        >
          {isFolder &&
            (isExpanded ? <ChevronDown className="w-3 h-3 mr-1" /> : <ChevronRight className="w-3 h-3 mr-1" />)}
          {isFolder ? (
            isExpanded ? (
              <FolderOpen className="w-4 h-4 mr-2" />
            ) : (
              <Folder className="w-4 h-4 mr-2" />
            )
          ) : (
            <file.icon className="w-4 h-4 mr-2" />
          )}
          <span className="text-xs truncate">{file.name}</span>
        </Button>

        {isFolder && isExpanded && file.children && (
          <div>{file.children.map((child: any) => renderFile(child, depth + 1))}</div>
        )}
      </div>
    )
  }

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Activity Bar */}
      <div className="flex">
        <div className="w-12 bg-card border-r border-border flex flex-col items-center py-2 gap-2">
          <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
            <FileText className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="w-8 h-8 p-0" onClick={onTerminalToggle}>
            <Terminal className="w-4 h-4" />
          </Button>
        </div>

        {/* File Explorer */}
        <div className="flex-1 p-2">
          <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Explorer</div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs font-medium">
              <ChevronDown className="w-3 h-3" />
              <span>PORTFOLIO</span>
            </div>
            <div className="ml-2 space-y-0.5">{files.map((file) => renderFile(file))}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
