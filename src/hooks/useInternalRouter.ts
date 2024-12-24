import type { InternalPath } from '@libs/internalTypes'
import { useRouter } from 'next/navigation'

export default function useInternalRouter() {
  const router = useRouter()

  return {
    push: (path: InternalPath) => router.push(path),
    replace: (path: InternalPath) => router.replace(path),
    back: () => router.back()
  }
}
