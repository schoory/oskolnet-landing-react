import { FC, useState } from "react"
import { Link } from "react-router-dom";
import { OskolnetLogo } from '../icons/OskolnetLogoComponent';
import { PhoneIcon } from '../icons/PhoneIcon'
import './HeaderComponent.scss'
import { OButton } from './../ButtonComponent/ButtonComponent';
import { OTeleport } from "../TeleportComponent/TeleportComponent";

type HeaderComponentProps = {

}

export const Header: FC<HeaderComponentProps> = () => {

  const [isLaptop, setIsLaptop] = useState(
    window.matchMedia("(max-width: 1280px)").matches
  )
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar__wrapper">
        <Link to='/' className="navbar__logo">
          <OskolnetLogo />
        </Link>
        {
          !isLaptop
            ? (
              <nav className="navbar__links">
                <Link to='/tariffs/for-home' className="navbar__link">Тарифы для дома</Link>
                <Link to='/tariffs/for-business' className="navbar__link">Тарифы для бизнеса</Link>
                <Link to='/contacts' className="navbar__link">Контакты</Link>
              </nav>
            )
            : null
        }
        <div className="navbar__phone">
          <PhoneIcon />
          <div className="navbar__phone-wrapper">
            <p>+7 (4725) 43-97-20</p>
            <span>круглосуточно</span>
          </div>
        </div>
        {
          !isLaptop
            ? (
              <div className="navbar__controls">
                <OButton className="navbar__btn" size="small">
                  Личный кабинет
                </OButton>
                <OButton className="navbar__btn" colorScheme="dark" size="small" to="/payment">
                  Оплатить
                </OButton>
              </div>
            )
            : (
              <OButton className={["navbar__burger", showMenu ? "navbar__burger_active" : ''].join(' ')} click={() => setShowMenu(value => !value)}>
                <span /><span /><span />
                {/* <BurgerIcon /> */}
              </OButton>
            )
        }
      </div>
      {
        isLaptop
          ? (
            <OTeleport visible={showMenu} className={'navbar__menu'}>
              <div className="navbar__menu-controls">
                <OButton className="navbar__btn" size="small">
                  Личный кабинет
                </OButton>
                <OButton className="navbar__btn" colorScheme="dark" size="small">
                  Оплатить
                </OButton>
              </div>
              <nav className="navbar__links">
                <Link to='/tariffs/for-home' className="navbar__link">Тарифы для дома</Link>
                <Link to='/tariffs/for-business' className="navbar__link">Тарифы для бизнеса</Link>
                <Link to='/contacts' className="navbar__link">Контакты</Link>
              </nav>
            </OTeleport>
          )
          : null
      }
    </header>
  )
}