import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
export default function Container(props) {
  // After mounting, we have access to the theme

  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Lee Robinson – Developer, writer, creator.',
    description: `Front-end developer, JavaScript enthusiast, and course creator.`,
    image: 'https://leerob.io/static/images/lee-banner.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <main id="skip" className="flex flex-col justify-center bg-gray-50 px-8 dark:bg-gray-900">
        {children}
      </main>
    </div>
  )
}
