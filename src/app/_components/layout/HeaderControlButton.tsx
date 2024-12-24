import MoonSvg from '@components/svgs/MoonSvg'
import SunSvg from '@components/svgs/SunSvg'
import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type HeaderControlButtonType = keyof typeof headerControlButtonType

const headerControlButtonType = {
  DARK: 'DARK' as const,
  LIGHT: 'LIGHT' as const
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  componentType: HeaderControlButtonType
}

const HeaderControlButton = ({ componentType, ...rest }: Props) => {
  return (
    <div className={clsx('relative h-8 w-8')}>
      <button
        className={clsx(
          'inline-flex h-full w-full items-center justify-center overflow-hidden rounded-md',
          'text-content-neutral-primary',
          'bg-transparent hover:bg-surface-neutral-base'
        )}
        {...rest}>
        <HeaderControlIcon componentType={componentType} />
      </button>
    </div>
  )
}

const HeaderControlIcon = ({ componentType }: { componentType: HeaderControlButtonType }) => {
  if (componentType === headerControlButtonType.DARK) {
    return <SunSvg />
  }
  if (componentType === headerControlButtonType.LIGHT) {
    return <MoonSvg />
  }

  return null
}

export default HeaderControlButton
