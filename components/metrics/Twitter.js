import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import MetricCard from 'components/metrics/Card'

export default function TwitterCard() {
  const { data: twitterFollowers } = useSWR('/api/twitter-followers', fetcher)

  const link = 'https://twitter.com/lone_Musk'

  return (
    <MetricCard
      header="Twitter Followers"
      link={link}
      metric={twitterFollowers ? twitterFollowers.followerCount : '--'}
      isCurrency={false}
    />
  )
}
