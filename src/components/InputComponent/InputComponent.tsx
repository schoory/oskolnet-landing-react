import { FC, ReactNode } from "react"

import './InputComponent.scss'

type InputComponent = {
  iconStart?: ReactNode,
  className?: string,
  value?: string,
  onChange?: Function,
  placeholder?: string,
  colorScheme?: 'light' | 'dark'
}

export const OInput: FC<InputComponent> = ({ className = '', value = '', onChange = () => {}, placeholder = '', iconStart, colorScheme = 'light' }) => {
  return (
    <div className={["o-input", colorScheme === 'dark' ? 'o-input_dark' : '', className].join(' ')}>
      {
        iconStart
        ? <div className="o-input__icon">{ iconStart }</div>
        : null
      }
      <input placeholder={placeholder} type="text" className="o-input__control" value={value} onInput={(event) => onChange((event.target as HTMLInputElement).value)} />
      <div className="o-input__back" />
    </div>
  )
}