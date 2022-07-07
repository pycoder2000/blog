import { Dialog, Combobox, Transition } from '@headlessui/react'
import { useState, useEffect, Fragment } from 'react'
import { HiSearch } from 'react-icons/hi'
import { useRouter } from 'next/router'
import { FiCommand } from 'react-icons/fi'

export default function CommandPalette({ navigation }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        setIsOpen(!isOpen)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const filterednavigation = query
    ? navigation.pages.filter((page) => page.name.toLowerCase().includes(query.toLocaleLowerCase()))
    : navigation.pages
  return (
    <>
      <button
        className="ml-2 mr-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-zinc-300 p-2 ring-neutral-400 transition duration-200 ease-in-out hover:bg-zinc-300 hover:ring-2 dark:bg-zinc-700 dark:hover:bg-zinc-800  "
        type="button"
        aria-label="Command palette"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiCommand />
      </button>
      <Transition.Root show={isOpen} as={Fragment} afterLeave={() => setQuery('')}>
        <Dialog
          onClose={setIsOpen}
          className="fixed inset-0 z-20 overflow-y-auto bg-zinc-600 p-12 pt-[20vh]"
        >
          <Transition.Child
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-zinc-500/75 " />
          </Transition.Child>
          <Transition.Child
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Combobox
              value=""
              onChange={(page) => {
                setIsOpen(false)
                router.push(`${page.href}`)
              }}
              as="div"
              className="relative mx-auto max-h-[50vh] max-w-xl divide-y divide-gray-300 overflow-hidden overflow-y-scroll rounded-xl bg-zinc-200 shadow-2xl ring-1 ring-black/5 dark:divide-zinc-700 dark:bg-zinc-800"
            >
              <div className="flex items-center px-4">
                <HiSearch className="h-6 w-6" />
                <Combobox.Input
                  onChange={(event) => {
                    setQuery(event.target.value)
                  }}
                  className="h-12 border-0 bg-transparent  text-sm text-gray-800 placeholder-gray-400 focus:ring-0 dark:text-neutral-400"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </div>
              {filterednavigation.length > 0 && (
                <Combobox.Options static className="max-h-30 overflow-y-auto py-4 text-sm">
                  {filterednavigation.map((page) => (
                    <Combobox.Option key={page.name} value={page}>
                      {({ active }) => (
                        <div
                          className={`cursor-pointer space-x-1 px-14  py-2  ${
                            active ? 'bg-zinc-300 dark:bg-zinc-600' : 'bg-zinc-200 dark:bg-zinc-800'
                          }`}
                        >
                          <span
                            className={`font-medium  ${
                              active
                                ? 'text-neutral-900 dark:text-neutral-200'
                                : 'text-neutral-900 dark:text-neutral-200'
                            }`}
                          >
                            {page.name}
                          </span>
                          <span
                            className={`  ${
                              active
                                ? 'text-neutral-700 dark:text-neutral-600'
                                : 'text-neutral-500 dark:text-neutral-800'
                            }`}
                          >
                            {page.repo}
                          </span>
                        </div>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )}
              {query && filterednavigation.length === 0 && (
                <p className="py-4 px-12 text-sm text-gray-500 ">no results found</p>
              )}
            </Combobox>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  )
}
