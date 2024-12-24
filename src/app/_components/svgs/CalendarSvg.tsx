import type { SvgComponentProps } from '@libs/internalTypes'

export default function CalendarSvg({ svgTitle, svgDescription }: SvgComponentProps) {
  return (
    <svg
      role="img"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="20"
      height="20"
      fill="none">
      {svgTitle && <title>{svgTitle}</title>}
      {svgDescription && <desc>{svgDescription}</desc>}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.5 6C8.928 6 6 8.928 6 12.5V35.5C6 39.072 8.928 42 12.5 42H35.5C39.072 42 42 39.072 42 35.5V12.5C42 8.928 39.072 6 35.5 6H12.5ZM35.5 9H12.5C10.55 9 9 10.55 9 12.5V14H39V12.5C39 10.55 37.45 9 35.5 9ZM39 17H9V35.5C9 37.45 10.55 39 12.5 39H35.5C37.45 39 39 37.45 39 35.5V17ZM15.5 21C14.12 21 13 22.12 13 23.5C13 24.88 14.12 26 15.5 26C16.88 26 18 24.88 18 23.5C18 22.12 16.88 21 15.5 21ZM24 21C22.62 21 21.5 22.12 21.5 23.5C21.5 24.88 22.62 26 24 26C25.38 26 26.5 24.88 26.5 23.5C26.5 22.12 25.38 21 24 21ZM32.5 21C31.12 21 30 22.12 30 23.5C30 24.88 31.12 26 32.5 26C33.88 26 35 24.88 35 23.5C35 22.12 33.88 21 32.5 21ZM15.5 30C14.12 30 13 31.12 13 32.5C13 33.88 14.12 35 15.5 35C16.88 35 18 33.88 18 32.5C18 31.12 16.88 30 15.5 30ZM24 30C22.62 30 21.5 31.12 21.5 32.5C21.5 33.88 22.62 35 24 35C25.38 35 26.5 33.88 26.5 32.5C26.5 31.12 25.38 30 24 30Z"
        clipRule="evenodd"
        opacity="0.5"
      />
    </svg>
  )
}
