import { FC, MouseEventHandler, ReactNode } from "react"
import { Link } from "react-router-dom"
import './ButtonComponent.scss'

type ButtonComponentProps = {
  size?: 'normal' | 'small' | 'big',
  colorScheme?: 'light' | 'default' | 'dark'
  className?: string,
  children?: ReactNode,
  click?: MouseEventHandler<HTMLButtonElement>,
  to?: string
}

export const OButton: FC<ButtonComponentProps> = ({ className, children, click, size = 'normal', colorScheme = 'default', to }) => {

  // если передан атрибут 'to' кнопка является ссылкой
  if (to) {
    return (
      <Link 
        to={to} 
        className={[
          'o-button', 
          colorScheme === 'light' ? 'o-button_light' : colorScheme === 'dark' ? 'o-button_dark' : '',
          size === 'small' ? 'o-button_small' : size === 'big' ? 'o-button_big' : '',
          className ? className : ''
        ].join(' ')} 
      > 
        {children}
      </Link>
    )
  } else {
    return (
      <button 
        className={[
          'o-button', 
          colorScheme === 'light' ? 'o-button_light' : colorScheme === 'dark' ? 'o-button_dark' : '',
          size === 'small' ? 'o-button_small' : size === 'big' ? 'o-button_big' : '',
          className ? className : ''
        ].join(' ')} 
        onClick={click}
      >
        { children }
      </button>
    )
  }
}