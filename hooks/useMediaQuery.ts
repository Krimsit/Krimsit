import { useEffect, useState } from "react"

const useMediaQuery = (query: string): boolean => {
  const [mediaQuery, setMediaQuery] = useState<any>(null)
  const [matches, setMatches] = useState(mediaQuery?.matches)

  useEffect(() => {
    const listener = () => setMatches(mediaQuery.matches)

    window.addEventListener("resize", listener)

    return () => window.removeEventListener("resize", listener)
  }, [mediaQuery, query])

  useEffect(() => {
    const mediaObj = window.matchMedia(query)

    setMediaQuery(mediaObj)
    setMatches(mediaObj.matches)
  }, [query])

  return matches
}

export default useMediaQuery
