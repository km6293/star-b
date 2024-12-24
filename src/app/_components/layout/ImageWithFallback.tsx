import { useState } from 'react'

import Image, { ImageProps } from 'next/image'

interface ImageWithFallbackProps extends ImageProps {
  alt: string
  src: string
}

export default function ImageWithFallback({ alt, src, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false)
  return (
    <>
      {error ? (
        <div className="flex aspect-video w-full items-center justify-center">STARLAWBLOG</div>
      ) : (
        <Image
          alt={alt}
          src={src}
          onError={() => setError(true)}
          {...props}
        />
      )}
    </>
  )
}
