import { Link } from "react-router-dom"
import { OButton } from "../ButtonComponent/ButtonComponent"
import { PhoneIcon } from "../icons/PhoneIcon"
import './FooterComponent.scss'
import { TelegramIcon } from './../icons/socials/TelegramIcon';
import { ViberIcon } from './../icons/socials/ViberIcon';
import { VkIcon } from './../icons/socials/VkIcon';
import { WhatsAppIcon } from './../icons/socials/WhatsAppIcon';
import { SiteExpertIcon } from './../icons/SiteExpertIcon'
import { useState } from "react";
import { SiteExpertIconSm } from "../icons/SiteExpertIconSm";

export const Footer = () => {
  const [isTablet, setIsTablet] = useState(
    window.matchMedia("(max-width: 912px)").matches
  )

  return (
    <div className="footer">
      {
        !isTablet
          ? (
            <div className="container footer__wrapper">
              <div className="footer__main">
                <nav className="footer__nav">
                  <div className="footer__navgroup">
                    <Link className="footer__navlink" to='/about'>О компании</Link>
                    <Link className="footer__navlink" to='/news'>Новости</Link>
                    <Link className="footer__navlink" to='/docs'>Документы</Link>
                  </div>
                  <div className="footer__navgroup">
                    <Link className="footer__navlink" to='/tariffs/for-home'>Тарифы для дома</Link>
                    <Link className="footer__navlink" to='/tariffs/for-business'>Тарифы для бизнеса</Link>
                    <Link className="footer__navlink" to='/contacts'>Контакты</Link>
                  </div>
                  <div className="footer__navgroup">
                    <Link className="footer__navlink" to='/speedtest'>Тест скорости</Link>
                    <Link className="footer__navlink" to='/coverage'>Карта покрытия</Link>
                  </div>
                </nav>
                <div className="footer__contacts">
                  <div className="footer__controls">
                    <OButton>Личный кабинет</OButton>
                    <OButton colorScheme='light' to="/payment">Оплатить</OButton>
                  </div>
                  <div className="footer__phone">
                    <PhoneIcon />
                    <div className="footer__phone-wrapper">
                      <p>+7 (4725) 43-97-20</p>
                      <span>Круглосуточно</span>
                    </div>
                  </div>
                  <div className="footer__socials">
                    <a href="#!"><ViberIcon /></a>
                    <a href="#!"><WhatsAppIcon /></a>
                    <a href="#!"><TelegramIcon /></a>
                    <a href="#!"><VkIcon /></a>
                  </div>
                </div>
              </div>
              <div className="footer__license">
                <p className="footer__license-info">
                  © ЗАО «Осколнэт», 2022
                </p>
                <p className="footer_license-confidential">
                  Продолжая использовать наш сайт, вы даете согласие на обработку файлов cookies и других пользовательских данных, в соответствии с Политикой конфиденциальности
                </p>
                <SiteExpertIcon />
              </div>
            </div>
          )
          : (
            <div className="container footer__wrapper">
              <div className="footer__main">
                <div className="footer__controls">
                  <OButton>Личный кабинет</OButton>
                  <OButton colorScheme='light' to="/payment">Оплатить</OButton>
                </div>
                <nav className="footer__nav">
                  <div className="footer__navgroup">
                    <Link className="footer__navlink" to='/about'>О компании</Link>
                    <Link className="footer__navlink" to='/news'>Новости</Link>
                    <Link className="footer__navlink" to='/docs'>Документы</Link>
                  </div>
                  <div className="footer__navgroup">
                    <Link className="footer__navlink" to='/tariffs/for-home'>Тарифы для дома</Link>
                    <Link className="footer__navlink" to='/tariffs/for-business'>Тарифы для бизнеса</Link>
                    <Link className="footer__navlink" to='/contacts'>Контакты</Link>
                  </div>
                  <div className="footer__navgroup">
                    <Link className="footer__navlink" to='/speedtest'>Тест скорости</Link>
                    <Link className="footer__navlink" to='/map'>Карта покрытия</Link>
                  </div>
                </nav>
                <div className="footer__contacts">
                  <div className="footer__phone">
                    <PhoneIcon />
                    <div className="footer__phone-wrapper">
                      <p>+7 (4725) 43-97-20</p>
                      <span>Круглосуточно</span>
                    </div>
                  </div>
                  <div className="footer__socials">
                    <a href="#!"><ViberIcon /></a>
                    <a href="#!"><WhatsAppIcon /></a>
                    <a href="#!"><TelegramIcon /></a>
                    <a href="#!"><VkIcon /></a>
                  </div>
                </div>
              </div>
              <div className="footer__license">
                <SiteExpertIconSm />
                <p className="footer__license-info">
                  © ЗАО «Осколнэт», 2022
                </p>
                <p className="footer_license-confidential">
                  Продолжая использовать наш сайт, вы даете согласие на обработку файлов cookies и других пользовательских данных, в соответствии с Политикой конфиденциальности
                </p>
              </div>
            </div>
          )
      }
      
    </div>
  )
}