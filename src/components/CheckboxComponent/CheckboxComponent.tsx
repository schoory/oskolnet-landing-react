import { ChangeEvent, FC, ReactNode } from "react"
import './CheckboxComponent.scss'

type CheckboxComponentProps = {
  className?: string
  children?: ReactNode
  checked?: boolean,
  onChange?: Function,
  colorScheme?: 'light' | 'dark'
}

export const OCheckbox: FC<CheckboxComponentProps> = ({ className = '', children, checked = false, onChange, colorScheme = 'light' }) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked)
    }
  }

  return (
    <label className={["o-checkbox", colorScheme === 'dark' ? 'o-checkbox_dark' : '', className].join(' ')}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="o-checkbox__mark" />
      <div className="o-checkbox__content">
        {
          children
        }
      </div>
    </label>
  )
}