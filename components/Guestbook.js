/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useRef, Suspense } from 'react'
import { format } from 'date-fns'
import { signIn, useSession } from 'next-auth/react'
import useSWR, { useSWRConfig } from 'swr'

import fetcher from '@/lib/fetcher'
import SuccessMessage from '@/components/SuccessMessage'
import ErrorMessage from '@/components/ErrorMessage'
import LoadingSpinner from '@/components/LoadingSpinner'
import { FaGoogle, FaGithub } from 'react-icons/fa'

function GuestbookEntry({ entry, user }) {
  const { mutate } = useSWRConfig()
  const deleteEntry = async (e) => {
    e.preventDefault()

    await fetch(`/api/guestbook/${entry.id}`, {
      method: 'DELETE',
    })

    mutate('/api/guestbook')
  }

  return (
    <div className="">
      <div className="my-4 w-full rounded-md border border-gray-100 bg-gray-100 px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
        <div className="mb-2 text-neutral-900 dark:text-neutral-300">{entry.body}</div>
        <div className="line-clamp-1 text-gray-600 text-opacity-80 dark:text-white">
          <div className="mb-2 flex ">
            <p className="text-sm text-gray-500">
              {entry.created_by} • {format(new Date(entry.updated_at), "d MMM yyyy 'at' h:mm bb")}
            </p>
          </div>
          <div className="flex items-center">
            {user && entry.created_by === user.name && (
              <>
                <button
                  aria-label="delete comment"
                  className="text-sm text-red-600 dark:text-red-400"
                  onClick={deleteEntry}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Guestbook({ fallbackData }) {
  const { data: session } = useSession()
  const { mutate } = useSWRConfig()
  const [form, setForm] = useState(false)
  const inputEl = useRef(null)
  const { data: entries } = useSWR('/api/guestbook', fetcher, {
    fallbackData,
  })

  const leaveEntry = async (e) => {
    e.preventDefault()
    setForm({ state: 'loading' })
    const res = await fetch('/api/guestbook', {
      body: JSON.stringify({
        body: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setForm({
        state: 'error',
        message: error,
      })
      return
    }

    inputEl.current.value = ''
    mutate('/api/guestbook')
    setForm({
      state: 'success',
      message: `Hooray! Thanks for signing my Guestbook.`,
    })
  }

  return (
    <>
      <div className="my-2 w-full rounded-md border border-gray-200 bg-white px-6 py-2 shadow-xl shadow-gray-400 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
        <div className="grid items-center justify-center">
          <h5 className="mt-2 text-lg font-normal text-gray-900 dark:text-gray-100 md:text-lg">
            Sign the Guestbook
          </h5>
        </div>
        {!session && (
          <div className="flex flex-row">
            <a
              href="/api/auth/signin/github"
              className="my-4 mx-2 flex h-20 w-1/2 items-center justify-center rounded bg-neutral-100 font-light text-gray-900 ring-gray-300 transition-all hover:ring-2 dark:bg-zinc-800 dark:text-gray-100"
              onClick={(e) => {
                e.preventDefault()
                signIn('github')
              }}
            >
              <div className="flex flex-col items-center justify-center">
                <FaGithub className="mb-1 mt-3 h-6 w-6" />
                <div className="mb-2 dark:text-neutral-300">Github</div>
              </div>
            </a>
            <a
              href="/api/auth/signin/google"
              className="my-4 mx-2 flex h-20 w-1/2 items-center justify-center rounded bg-neutral-100 font-light text-gray-900 ring-gray-300 transition-all hover:ring-2 dark:bg-zinc-800 dark:text-gray-100"
              onClick={(e) => {
                e.preventDefault()
                signIn('google')
              }}
            >
              <div className="flex flex-col items-center justify-center">
                <FaGoogle className="mb-1 mt-3 h-6 w-6" />
                <div className="mb-2 dark:text-neutral-300">Google</div>
              </div>
            </a>
          </div>
        )}
        {session?.user && (
          <div className="flex flex-col ">
            <form className="mb-2 flex flex-col items-center space-y-4" onSubmit={leaveEntry}>
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                ref={inputEl}
                aria-label="Your message"
                placeholder="Your message..."
                required
                rows={3}
                className="w-full rounded-md border border-gray-300 text-sm shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:focus:border-gray-700 dark:focus:ring-neutral-600"
                maxLength={500}
              />
              <button
                className="grid w-full place-items-center rounded bg-neutral-100 px-3 py-1 font-medium ring-gray-300 transition-all hover:ring-2 dark:bg-gray-600"
                type="submit"
              >
                {form.state === 'loading' ? <LoadingSpinner /> : 'Sign'}
              </button>
            </form>
          </div>
        )}
        {form.state === 'error' ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === 'success' ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <p className="text-xs text-gray-800 dark:text-gray-500"></p>
        )}
      </div>
      <div className="w-full">
        {entries?.map((entry) => (
          <GuestbookEntry key={entry.id} entry={entry} user={session?.user} />
        ))}
      </div>
    </>
  )
}
