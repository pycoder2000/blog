/* eslint-disable import/no-anonymous-default-export */
import { getUser } from '@/lib/twitter'

export default async (_, res) => {
  const response = await getUser('lone_Musk')
  const { data } = response

  if (!response) {
    const user = null

    return res.status(200).json({ user })
  }

  const user = {
    ...data,
  }

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json({ user })
}
