import { useEffect } from 'react'
import useSWR from 'swr-old'
import fetcher from 'lib/fetcher'

export default function ViewCounter({ slug, className, blogPage = false }) {
  let { data } = useSWR(`/api/views/${slug}`, fetcher)
  let views = new Number(data?.total)

  useEffect(() => {
    let registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      })

    if (blogPage) {
      registerView()
    }
  }, [blogPage, slug])

  return <span className={className}>{`${views > 0 ? views.toLocaleString() : '–––'} Views`}</span>
}
