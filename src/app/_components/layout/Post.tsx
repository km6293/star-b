import PostArticle from './PostArticle'
import { LawCase } from '@libs/internalTypes'
import CalendarSvg from '@components/svgs/CalendarSvg'
import ImageWithFallback from './ImageWithFallback'

type PostProps = {
  lawCase: LawCase
}

export default function Post({ lawCase }: PostProps) {
  return (
    <PostArticle lawCase={lawCase}>
      <div className="flex h-full flex-col overflow-hidden">
        <ImageWithFallback
          className="relative aspect-video w-full rounded-t-md"
          alt={lawCase.keyLaws}
          src={lawCase.imageUrl}
          width={300}
          height={200}
          priority
        />
        <div className="flex flex-1 flex-col justify-between border-t border-t-surface-neutral-base p-4 pt-4 text-content-neutral-primary">
          <h5 className="mb-3 line-clamp-2 star-medium18">{lawCase.similarQuestion}</h5>
          <div className="flex flex-col gap-1">
            <p className="star-light14 mb-1 line-clamp-2">{lawCase.similarAnswer}</p>
            <div className="flex gap-1">
              <CalendarSvg />
              <p className="star-light12">{lawCase.date}</p>
            </div>
          </div>
        </div>
      </div>
    </PostArticle>
  )
}
