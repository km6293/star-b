import Image from 'next/image'
export async function generateMetadata({ params }: { params: Promise<{ postId: string }> }) {
  const postId = (await params).postId
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const { data } = await fetch(`${baseUrl}/api/posts?filters[id]=${postId}`).then(res => res.json())
  const { legalCategory, similarQuestion, similarAnswer, keyLaws } = data[0]

  const title = similarQuestion.split('.')[0]
  const categoryList = legalCategory.split('>')
  const keyLawList = keyLaws.split(',')

  return {
    title: `STARLAWBLOG | ${title}`,
    content: similarAnswer,
    keywords: [...categoryList, ...keyLawList]
  }
}

export default async function Page({ params }: { params: Promise<{ postId: string }> }) {
  const postId = (await params).postId
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const { data } = await fetch(`${baseUrl}/api/posts?filters[id]=${postId}`).then(res => res.json())
  const { legalCategory, similarQuestion, similarAnswer, keyLaws, caseLaw, date, imageUrl } = data[0]
  return (
    <section className="flex w-full max-w-layout flex-col gap-10 justify-self-center px-10 py-10">
      <div>
        <div className="block justify-between text-content-neutral-base md:flex">
          <p>{legalCategory}</p>
          <p className="pt-3 md:pt-0">{date}</p>
        </div>
        <div className="my-4 h-px bg-content-neutral-base"></div>
      </div>
      <Image
        className="self-center"
        src={imageUrl}
        width={600}
        height={300}
        priority
        alt={keyLaws}
      />

      <div>
        <div className="star-bold24">Q.</div>
        <div className="my-4 h-px bg-content-neutral-base"></div>
        <h1 className="text-content-neutral-week star-bold20">{similarQuestion}</h1>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <div className="star-bold24">A.</div>
          <div className="my-4 h-px bg-content-neutral-base"></div>
          <p className="text-content-neutral-week star-medium18">{similarAnswer}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>주요법령 : {keyLaws}</p>
          <p>판례 : {caseLaw}</p>
        </div>
      </div>
    </section>
  )
}
