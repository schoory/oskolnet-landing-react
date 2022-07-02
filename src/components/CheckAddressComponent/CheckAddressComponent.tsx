
import { FC, MouseEvent, useState } from 'react';
import { OButton } from '../ButtonComponent/ButtonComponent';

import './CheckAddressComponent.scss'
import { LocationIcon } from './../icons/LocationIcon';
import { OInput } from './../InputComponent/InputComponent';
import { useNavigate } from 'react-router-dom';

export const CheckAddressForm: FC = () => {
  const [address, setAddress] = useState('')
  const [houseNumber, setHouseNumber] = useState('')

  const navigate = useNavigate()

  const [isTablet, setIsTablet] = useState(
    window.matchMedia("(max-width: 912px)").matches
  )

  const handleSearchCoverage = (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    navigate(
      `/coverage${ address 
        ? '?street=' + address 
        : '' 
      }${houseNumber 
        ? address 
          ? '&house=' + houseNumber
          : '?house=' + houseNumber
        : ''
      }`
    )
  }

  return (
    <article className="address-form">
      <h3 className="address-form__title">
        Проверить возможность подключения по вашему адресу
      </h3>
      <form className="address-form__wrapper">
        { 
          !isTablet
            ? <LocationIcon />
            : null
        }
        <OInput iconStart={isTablet ? <LocationIcon /> : null} placeholder='Улица' className='address-form__input' value={address} onChange={(value: string) => setAddress(value)}></OInput>
        <OInput placeholder='Дом' className='address-form__input' value={houseNumber} onChange={(value: string) => setHouseNumber(value)}></OInput>
        <OButton className='address-form__btn' click={handleSearchCoverage}>Проверить</OButton>
      </form>
    </article>
  )
}