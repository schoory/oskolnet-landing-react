
import { FC, MouseEvent, useState } from 'react';
import { MaskInput } from './../MaskInputComponent/MaskInputComponent';
import { OButton } from './../ButtonComponent/ButtonComponent';
import { OCheckbox } from './../CheckboxComponent/CheckboxComponent';

import './ConsultFormComponent.scss'

type ConsultFormProps = {
  onApply?: Function,
  onError?: Function
}

export const ConsultForm: FC<ConsultFormProps> = ({ onApply, onError }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [userName, setUserName] = useState('')
  const [personalDataAllowed, setPersonalDataAllowed] = useState(false)

  const phoneNumberChanged = (newValue: string) => {
    setPhoneNumber(newValue)
  }

  const handleApplyForm = (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    if (!phoneNumber || !phoneNumber.match(/\d{10}/g)) {
      return onError ? onError('Некорректный номер телефона') : null
    }
    if (!userName) {
      return onError ? onError('Введите Ваше имя') : null
    }
    if (!personalDataAllowed) {
      return onError ? onError('Вы не согласились на обработку персональных данных') : null
    }
    if (onApply) {
      onApply(phoneNumber, userName, personalDataAllowed)
    }
  }

  return (
    <article className="consult-form">
      <h3 className="consult-form__title">
        Трудно выбрать? Мы поможем! 
      </h3>
      <form className="consult-form__wrapper">
        <div className='consult-form__controls'>
          <div className='consult-form__inputs'>
            <MaskInput className='consult-form__input' mask='+7 (DDD) DDD-DD-DD' onChange={phoneNumberChanged}/>
            <input placeholder='Как Вас зовут?' className='consult-form__input' type="text" value={userName} onInput={(event) => setUserName((event.target as HTMLInputElement).value)} />
          </div>
          <OCheckbox checked={personalDataAllowed} onChange={(value: boolean) => setPersonalDataAllowed(value)}>Нажимая на кнопку, я даю согласие на обработку персональных данных</OCheckbox>
        </div>
        <OButton className='consult-form__btn' click={handleApplyForm}>Жду звонка</OButton>
      </form>
    </article>
  )
}