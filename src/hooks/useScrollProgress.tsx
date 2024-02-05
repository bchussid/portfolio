import React, { useEffect, useState } from 'react'

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0)

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentScrollY:number = window.scrollY
      const maxScrollY:number = document.body.scrollHeight - window.innerHeight

      if (maxScrollY) {
        setCompletion((currentScrollY / maxScrollY) * 100)
      }
    }

    window.addEventListener('scroll', updateScrollCompletion)

    return () => window.removeEventListener('scroll', updateScrollCompletion)
    

  }, [])
  return completion
}

export default useScrollProgress