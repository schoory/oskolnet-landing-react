
import { useState } from "react"
import { OBreadcrumbs } from './../../components/BreadcrumbsComponent/BreadcrumbsComponent';
import { OSection } from "../../components/SectionComponent/SectionComponent";
import { PhoneIcon } from "../../components/icons/PhoneIcon";
import { ViberIcon } from "../../components/icons/socials/ViberIcon";
import { WhatsAppIcon } from "../../components/icons/socials/WhatsAppIcon";
import { TelegramIcon } from "../../components/icons/socials/TelegramIcon";
import { VkIcon } from "../../components/icons/socials/VkIcon";
import './MapPage.scss'

export const MapPage = () => {

  const [blackoutVisible, setBlackoutVisible] = useState(true)

  return (
    <div className="map-page">
      <iframe 
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aff59f6b3ab2cba214ae8eb0932feaa5bca9931d25b2bd1d50ffc2c62fa93cc99&amp;source=constructor" 
        width="100%" 
        height="714"
        className={["map-page__map", !blackoutVisible ? 'map-page__map_active' : ''].join(' ')}
        onMouseLeave={() => setBlackoutVisible(true)}
      />
      <div className={["map-page__blackout", !blackoutVisible ? "map-page__blackout_hide" : ''].join(' ')} onMouseEnter={() => setBlackoutVisible(false)} />
      <OBreadcrumbs breadcrumbs={[
        { name: 'Главная', to: "/" },
        { name: 'Контакты', to: "/contacts" },
      ]} />
      <OSection title="Контакты">
        <div className="container map-page__wrapper">
          <div className="map-page__panel-blackout" />
          <div className="map-page__panel">
            <div className="map-page__contacts">
              <div className="map-page__contacts-item">
                <PhoneIcon />
                <p className="map-page__phone">+7 (4725) 43-97-20</p>
              </div>
              <div className="map-page__contacts-item">
                <PhoneIcon />
                <p>info@oskolnet.ru</p>
              </div>
              <div className="map-page__contacts-item">
                <PhoneIcon />
                <p>РФ. г. Старый Оскол, мкр. Королева, д. 28</p>
              </div>
            </div>
            <div className="map-page__socials">
              <a href="#!"><ViberIcon /></a>
              <a href="#!"><WhatsAppIcon /></a>
              <a href="#!"><TelegramIcon /></a>
              <a href="#!"><VkIcon /></a>
            </div>
          </div>
        </div>
      </OSection>
    </div>
  )
}