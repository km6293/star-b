import ReadingGlassSvg from '@components/svgs/ReadingGlassSvg'
import clsx from 'clsx'
import Form from 'next/form'

type Props = {
  contains?: string
  page?: string
}

export default function SearchForm({ contains, page }: Props) {
  return (
    <Form
      action=""
      className="h-14 w-full content-center self-center rounded-full border border-solid border-border-neutral-base focus-within:border-content-neutral-primary md:w-2/5">
      <div className="flex w-full">
        <div className={clsx('flex w-full items-center', 'pl-5 pr-2')}>
          <input
            name="filters[similarQuestion][$contains]"
            className="inline-block w-full bg-transparent text-content-neutral-primary outline-none star-medium14 placeholder:text-content-neutral-base"
            placeholder="검색"
            autoComplete="off"
            defaultValue={contains}
            maxLength={100}
            minLength={1}
          />
          <input
            type="hidden"
            name="pagination[page]"
            defaultValue={page}
          />
          <input
            type="hidden"
            name="pagination[pageSize]"
            defaultValue="10"
          />
        </div>
        <button className="pr-5">
          <ReadingGlassSvg />
        </button>
      </div>
    </Form>
  )
}
