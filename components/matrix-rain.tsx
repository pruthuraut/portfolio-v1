"use client"

import { useEffect, useState } from "react"

export function MatrixRain() {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    const newDrops = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setDrops(newDrops)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute text-[#39ff14] text-xs font-mono matrix-rain"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="block">
              {Math.random() > 0.5 ? "1" : "0"}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
