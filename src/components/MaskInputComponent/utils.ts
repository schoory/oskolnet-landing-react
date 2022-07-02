const dictionary = [
  ['D', /^\d{1}$/i],
  ['A', /^\w{1}$/i]
]

/**
 * Ищет расхождения в значении и маске, при нахождении выдает регулярное выражение соответствующее символу в маске
 * @param value Значение
 * @param mask Маска
 * @returns Регулярное выражение
 */
export const getRegexpFromMaskChar = (value: string, mask: string) => {
  const placeholderIndex = value.indexOf('_')
  const rule = dictionary.find(item => item[0] === mask[placeholderIndex])
  if (rule) {
    return rule[1]
  } else {
    return null
  }
}
/**
 * Удаляет первый символ с конца значения, который не соответствует маске, возвращает новое значение
 * @param value Значение
 * @param mask Маска
 * @returns Новое значение
 */
export const removeChar = (value: string, mask: string): string => {
  for (let i = value.length - 1; i >= 0; i--) {
    if (value[i] !== mask[i] && value[i] !== '_') {
      return value.slice(0, i) + '_' + value.slice(i+1)
    }
  }
  return value
}

/**
 * Возвращает чистое значение 
 * @param value Значение с маской
 * @param mask Маска
 * @returns Чистое значение
 */
export const getPureValue = (value: string, mask: string): string => {
  let result = ''
  for (let i = 0; i < value.length; i++) {
    if (value[i] !== mask[i] && value[i] !== '_') {
      result += value[i]
    }
  }
  return result
}