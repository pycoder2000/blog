import { useState, useRef, Suspense } from 'react'
import { format } from 'date-fns'
import { signIn, useSession } from 'next-auth/react'
import useSWR, { useSWRConfig } from 'swr'

import fetcher from '@/lib/fetcher'
import SuccessMessage from '@/components/SuccessMessage'
import ErrorMessage from '@/components/ErrorMessage'
import LoadingSpinner from '@/components/LoadingSpinner'
import { AiFillGithub } from 'react-icons/ai'

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
        state: false,
        message: error,
      })
      return
    }

    inputEl.current.value = ''
    mutate('/api/guestbook')
    setForm({
      state: true,
      message: `Hooray! Thanks for signing my Guestbook.`,
    })
  }

  return (
    <>
      <div className="my-2 w-full rounded-md border border-gray-200 bg-white px-6 py-2 shadow-xl shadow-gray-400 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
        <h5 className="mt-2 text-lg font-bold text-gray-900 dark:text-gray-100 md:text-xl">
          Sign the Guestbook
        </h5>
        {!session && (
          // eslint-disable-next-line @next/next/no-html-link-for-pages
          <a
            href="/api/auth/signin/github"
            className="my-4 flex h-16 w-full items-center justify-center rounded bg-gray-200 font-bold text-gray-900 hover:border hover:border-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:border-white"
            onClick={(e) => {
              e.preventDefault()
              signIn('github')
            }}
          >
            <AiFillGithub className="mr-2 h-6 w-6" />
            <div className="dark:text-neutral-300">Login with Github</div>
          </a>
        )}
        {session?.user && (
          <form className="relative my-4" onSubmit={leaveEntry}>
            <input
              ref={inputEl}
              aria-label="Your message"
              placeholder="Your message..."
              required
              className="mt-1 block w-full rounded-md border-gray-300 bg-white py-2 pl-4 pr-32 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <button
              className="absolute right-1 top-1 flex h-8 w-28 items-center justify-center rounded bg-gray-100 px-4 pt-1 font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-100"
              type="submit"
            >
              Submit
            </button>
          </form>
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
