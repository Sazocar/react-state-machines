import { useEffect, useState } from "react"

export const useRenderImage = (src) => {
  const [ source, setSource ] = useState('')

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSource(src)
  
  }, [src])
  
  return source
}