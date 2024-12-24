import { ReactNode } from 'react'
import { LawCase } from '@libs/internalTypes'
import clsx from 'clsx'
import useInternalRouter from '@hooks/useInternalRouter'

type PostArticleType = {
  children: ReactNode
  lawCase: LawCase
}

export default function PostArticle({ children, lawCase }: PostArticleType) {
  const { push } = useInternalRouter()

  const onClick = () => {
    push(`/posts/${lawCase.id}`)
  }

  return (
    <article
      className={clsx(
        'flex h-full flex-col gap-2 rounded-md border border-surface-neutral-base shadow-md transition',
        'hover:shadow-xl dark:hover:border-content-neutral-primary'
      )}
      onClick={onClick}>
      {children}
    </article>
  )
}
