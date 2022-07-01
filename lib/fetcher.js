const Fetcher = async (...args) => {
  const res = await fetch(...args)

  return res.json()
}

export default Fetcher
