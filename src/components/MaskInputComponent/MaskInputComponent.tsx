import { FC, KeyboardEvent, useEffect, useState } from "react"
import { getPureValue, getRegexpFromMaskChar, removeChar } from "./utils"

type MaskInputProps = {
  className: string,
  mask: string,
  onChange: Function
}

export const MaskInput: FC<MaskInputProps> = ({ className = '', mask, onChange }) => {

  const [maskValue, setMaskValue] = useState('')

  useEffect(() => {
    setMaskValue(mask.replaceAll('D', '_'))
  }, [mask])

  useEffect(() => {
    const pureValue = getPureValue(maskValue, mask)
    onChange(pureValue)
  }, [maskValue])

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Backspace') {
      const regexp = getRegexpFromMaskChar(maskValue, mask)
      if (regexp && event.key.match(regexp)) {
        const newValue = maskValue.replace('_', event.key)
        setMaskValue(newValue)
      }
    }
    if (event.key === 'Backspace') {
      const newValue = removeChar(maskValue, mask)
      setMaskValue(newValue)
    }
  }

  return (
    <input className={className} type='text' value={maskValue} onInput={() => {}} onKeyDown={handleKeyDown} />
  )
}