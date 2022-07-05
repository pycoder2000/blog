import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'ActivityLayout'

export async function getStaticProps() {
  const activityDetails = await getFileBySlug('activity', ['default'])
  return { props: { activityDetails } }
}

export default function Activity({ activityDetails }) {
  const { mdxSource, frontMatter } = activityDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
