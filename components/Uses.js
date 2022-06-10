import Link from '@/components/Link'

const UsesTech = ({ name, link, description }) => {
  return (
    <>
      <div>
        <ul key={name}>
          <div className="flex flex-row">
            <li key={name} className="mr-1 ">
              <Link
                href={link}
                className="text-lg text-slate-500 hover:text-primary-color-500 dark:text-slate-400 dark:hover:text-primary-color-dark-500"
              >
                {name}
              </Link>
            </li>
            <span className="ml-1 font-mono text-gray-200 dark:text-gray-600">
              &#47;&#47; {description}
            </span>
          </div>
        </ul>
      </div>
    </>
  )
}

export default UsesTech
