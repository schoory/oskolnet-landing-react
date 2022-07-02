import { FC } from "react"
import { Tariff } from "../../types/Tariffs"
import { OButton } from "../ButtonComponent/ButtonComponent"
import { TariffAboutIcon } from "../icons/TariffAboutIcon"
import { TariffSpeedIcon } from "../icons/TariffSpeedIcon"

import './TariffsItemComponent.scss'

interface TariffCardProps extends Tariff {
  onAboutCall: Function,
  onConnectCall: Function
}

export const TariffCard: FC<TariffCardProps> = ({ id, name, speed, price, accent, onAboutCall, onConnectCall }) => {
  return (
    <div className={["tariffs-card", accent ? "tariffs-card_accent" : ''].join(' ')}>
      {
        accent
          ? <span className="tariffs-card__badge">Хит</span>
          : null
      }
      <p className="tariffs-card__title">
        { name }
      </p>
      <div className="tariffs-card__speed">
        <TariffSpeedIcon />
        { `${speed} Мбит/с` }
      </div>
      <button className="tariffs-card__about" onClick={() => onAboutCall(id)}>
        Подробнее
        <TariffAboutIcon />
      </button>
      <div className="tariffs-card__price">
        <big>${price}</big> 
        <p>₽/мес</p>
      </div>
      <OButton className="tariffs-card__connect" size="small" click={() => onConnectCall(id)}>
        Подключить
      </OButton>
    </div>
  )
}