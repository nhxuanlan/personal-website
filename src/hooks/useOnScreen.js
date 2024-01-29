import { useEffect, useState } from 'react'

export function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(([entry]) => {
    setIntersecting(entry.isIntersecting)
  })

  useEffect(() => {
    // if (ref) observer.observe(ref.current)
    console.log(ref)
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
    // eslint-disable-next-line
  }, [])

  return isIntersecting
}
