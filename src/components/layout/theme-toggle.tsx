"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Icon } from "@/lib/icons"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full border border-border bg-transparent text-foreground transition-all duration-250 hover:border-accent hover:text-accent hover:-translate-y-[2px]"
      aria-label="Toggle theme"
    >
      <Icon name="sun-moon" className="w-4 h-4" />
    </button>
  )
}
