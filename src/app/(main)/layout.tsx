import Footer from '@components/layout/Footer'
import Header from '@components/layout/Header'
import ScrollToTopButton from '@components/layout/ScrollToTopButton'

export default function DomainLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}
