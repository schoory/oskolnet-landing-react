import { FC, ReactNode } from "react"
import './SectionComponent.scss'

type SectionComponentProps = {
  className?: string
  colorScheme?: 'transparent' | 'light',
  children?: ReactNode,
  title?: string
}

export const OSection: FC<SectionComponentProps> = ({ className = '', colorScheme = 'transparent', children, title = 'Section title' }) => {
  return (
    <section 
      className={[
        "o-section",
        colorScheme === 'light' ? 'o-section_light' : '',
        className
      ].join(' ')}
    >
      <h2 className="o-section__title">{ title }</h2>
      {
        children
      }
    </section>
  )
}