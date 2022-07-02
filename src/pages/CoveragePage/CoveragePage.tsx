import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { OSection } from './../../components/SectionComponent/SectionComponent';
import { OBreadcrumbs } from './../../components/BreadcrumbsComponent/BreadcrumbsComponent';
import { CheckAddressForm } from './../../components/CheckAddressComponent/CheckAddressComponent';

import Addresses from '../../assets/data/Addresses.json'

import './CoveragePage.scss'
import { OButton } from '../../components/ButtonComponent/ButtonComponent';

export const CoveragePage = () => {

  const [params, setParams] = useSearchParams()
  const [addresses, setAddresses] = useState(Addresses)
  const navigate = useNavigate()

  
  useEffect(() => {
    const street = params.get("street")
    const house = params.get("house")
    let filterAddresses = [ ...addresses ]
    if (street) {
      filterAddresses = Addresses.filter((address) => address.street.includes(street))
      setAddresses(filterAddresses.length ? filterAddresses : [])
    }
    if (house) {
      filterAddresses = filterAddresses.filter((addresses) => addresses.houses.includes(house) || addresses.houses[0] === 'Все дома')
      setAddresses(filterAddresses.length ? filterAddresses : [])
    }
  }, [params])

  const handleClearFilter = () => {
    navigate('/coverage')
    setAddresses(Addresses)
  }

  return (
    <div className="coverage-page">
      <OBreadcrumbs breadcrumbs={[
        { name: 'Главная', to: '/' },
        { name: 'Карта покрытия', to: '/coverage' }
      ]} />
      <OSection title='Карта покрытия'>
        <div className="container coverage-page__wrapper">
          <CheckAddressForm />
          <div className="coverage-page__content">
            <h3 className="coverage-page__title">Адреса, по которым имеется техническая возможность подключения:</h3>
            {
              params.get('street') || params.get('house')
                ? <OButton className='coverage-page__btn' click={handleClearFilter}>Назад к списку</OButton>
                : null
            }
            <div className="coverage-page__table">
              <div className='coverage-page__table-row'>
                <p className="coverage-page__table-header">Микрорайон / улица</p>
                <p className="coverage-page__table-header">Дом</p>
              </div>
              {
                addresses.length === 0
                  ? <p className="coverage-page__table-empty">По заданному адресу нет возможности подключения</p>
                  : addresses.map((address, index) => (
                    <div className="coverage-page__table-row" key={index}>
                      <p className="coverage-page__table-cell">{address.street}</p>
                      <p className="coverage-page__table-cell">{address.houses.join(', ')}</p>
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
      </OSection>
    </div>
  )
}