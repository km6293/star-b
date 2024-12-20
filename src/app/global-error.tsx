'use client'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <head>
        <title>star-b</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </head>
      <body>
        <h2>무슨 일이 일어나고 있어요.</h2>
        <pre>{error.message}</pre>
        <pre>{error.stack}</pre>
        {error.digest && <pre>{error.digest}</pre>}
        <button onClick={() => reset()}>다시 시도</button>
      </body>
    </html>
  )
}
