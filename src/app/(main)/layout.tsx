import Header from '@components/layout/Header'

export default function DomainLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col pt-10">{children}</main>
    </>
  )
}
