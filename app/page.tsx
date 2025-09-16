"use client"

import { useState } from "react"
import { VSCodeSidebar } from "@/components/vscode-sidebar"
import { VSCodeEditor } from "@/components/vscode-editor"
import { VSCodeTerminal } from "@/components/vscode-terminal"
import { MatrixRain } from "@/components/matrix-rain"

export default function Portfolio() {
  const [activeFile, setActiveFile] = useState("README.md")
  const [terminalOpen, setTerminalOpen] = useState(false)

  return (
    <div className="h-screen bg-background text-foreground overflow-hidden relative">
      <MatrixRain />

      {/* VSCode Title Bar */}
      <div className="h-8 bg-card border-b border-border flex items-center px-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-muted-foreground">Pruthu Raut - Cybersecurity Portfolio</div>
      </div>

      {/* Main Layout */}
      <div className="flex h-[calc(100vh-2rem)]">
        <VSCodeSidebar
          activeFile={activeFile}
          onFileSelect={setActiveFile}
          onTerminalToggle={() => setTerminalOpen(!terminalOpen)}
        />

        <div className="flex-1 flex flex-col">
          <VSCodeEditor activeFile={activeFile} />

          {terminalOpen && <VSCodeTerminal onClose={() => setTerminalOpen(false)} />}
        </div>
      </div>
    </div>
  )
}
