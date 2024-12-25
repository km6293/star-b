import Header from '@components/layout/Header'

export default function DomainLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <span>
      <Header />
      <main>{children}</main>
    </span>
  )
}
