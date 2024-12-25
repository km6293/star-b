import Header from '@components/layout/Header'
import ScrollToTopButton from '@components/layout/ScrollToTopButton'

export default function DomainLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <span>
      <Header />
      <main>{children}</main>
      <ScrollToTopButton />
    </span>
  )
}
