export default function Skeleton() {
  return (
    <section className="mx-auto w-full justify-items-center">
      <div className="grid max-w-layout grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {Array.from({ length: 10 }, (_, index) => (
          <article
            key={index}
            className="flex h-full max-h-[493.88px] w-full max-w-[576px] animate-pulse flex-col gap-2 rounded-md border border-surface-neutral-base bg-gray-300 shadow-md transition">
            <div className="relative aspect-[16/9] min-h-[200px] w-full rounded-t-md bg-gray-300">
              <div className="h-full w-full animate-pulse rounded-t-md bg-gray-400" />
            </div>

            <div className="flex flex-1 flex-col justify-between border-t border-t-surface-neutral-base p-4 pt-4 text-content-neutral-primary">
              <h5 className="mb-3 line-clamp-2 h-6 animate-pulse bg-gray-400"></h5>
              <div className="flex flex-col gap-1">
                <p className="mb-1 line-clamp-2 h-4 animate-pulse bg-gray-400"></p>
                <div className="flex gap-1">
                  <p className="h-4 animate-pulse bg-gray-400"></p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
