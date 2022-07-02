import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { OButton } from "../../components/ButtonComponent/ButtonComponent"
import { CheckAddressForm } from "../../components/CheckAddressComponent/CheckAddressComponent"
import { ConsultForm } from "../../components/ConsultFormComponent/ConsultFormComponent"
import { ONotification } from "../../components/NotificationComponent/NotificationComponent"
import { OSection } from "../../components/SectionComponent/SectionComponent"
import { TariffsSlider } from "../../components/TariffsComponent/TariffsComponent"
import { OBreadcrumbs } from './../../components/BreadcrumbsComponent/BreadcrumbsComponent';

import './TariffsPage.scss'

export const TariffsPage = () => {
  const params = useParams()

  const [notification, setNotification] = useState({
    visible: false,
    message: '',
    style: 'success'
  })

  const handleApplyConsultationForm = (phoneNumber: string, userName: string, personalDataAllowed: boolean) => {
    setNotification({ visible: true, message: 'Ваша заявка принята!', style: 'success' })
    setTimeout(() => {
      setNotification({ visible: false, message: '', style: 'success' })
    }, 3000)
  }

  const handleErrorConsultationForm = (message: string) => {
    setNotification({ visible: true, message: message, style: 'error' })
    setTimeout(() => {
      setNotification({ visible: false, message: '', style: 'success' })
    }, 3000)
  }

  return (
    <div className="tariffs-page">
      <OBreadcrumbs breadcrumbs={[
        { name: 'Главная', to: '/' },
        { name: params.type === 'for-home' 
            ? 'Тарифы для дома'
            : 'Тарифы для бизнеса', 
          to: params.type === 'for-home' 
            ? 'tariffs/for-home'
            : 'tariffs/for-business' }
      ]} />
      <div className="tariffs-page__wrapper">
        <OSection title={ params.type === 'for-home' ? "Тарифы для дома" : "Тарифы для бизнеса"} className="tariffs-page__section">
          <div className="container">
            <TariffsSlider className="tariffs-section-no-shadow" type={ params.type === 'for-home' ? 'home' : 'business' } />
          </div>
        </OSection>
        <div className="tariffs-page__forms container">
          <ConsultForm onApply={handleApplyConsultationForm} onError={handleErrorConsultationForm} />
          <CheckAddressForm />
        </div>
      </div>
      <ONotification visible={notification.visible} className="tariffs-section__notification" style={notification.style as ('error' | 'success')}>
        <p>{notification.message}</p>
      </ONotification>
    </div>
  )
}