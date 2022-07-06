import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <div className="ml-1 cursor-pointer rounded-md bg-zinc-300 ring-neutral-400 hover:bg-zinc-300 hover:ring-2 dark:bg-zinc-700 dark:hover:bg-zinc-800">
      <motion.button
        className="flex h-8 w-8 items-center justify-center p-2"
        whileHover={{
          transition: { duration: 0.2 },
        }}
        whileTap={{
          scale: 0.7,
          rotate: 360,
          transition: { duration: 0.2 },
        }}
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <HiSun className="h-4 w-4" />
        ) : (
          <HiMoon className="h-4 w-4" />
        )}
      </motion.button>
    </div>
  )
}

export default ThemeSwitch
