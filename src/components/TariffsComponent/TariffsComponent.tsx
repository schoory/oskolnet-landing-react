import { FC, useEffect, useState, useTransition } from "react"
import { OSlider } from "../SliderComponent/SliderComponent"
import { Tariff, TariffCategory } from "../../types/Tariffs"
import TariffsCategories from "../../assets/data/TariffsCategories.json"
import Tariffs from "../../assets/data/Tariffs.json"
import { TariffCard } from "./TariffsItemComponent"
import { OTeleport } from "../TeleportComponent/TeleportComponent"
import { OButton } from "../ButtonComponent/ButtonComponent"
import { OInput } from "../InputComponent/InputComponent"
import { OCheckbox } from "../CheckboxComponent/CheckboxComponent"
import { MaskInput } from "../MaskInputComponent/MaskInputComponent"

import './TariffsComponent.scss'
import { CloseIcon } from './../icons/CloseIcon';

type TariffsSliderProps = {
  className: string,
  type?: string
}

export const TariffsSlider: FC<TariffsSliderProps> = ({ className = '', type = "home" }) => {

  const [isLaptop, setIsLaptop] = useState(
    window.matchMedia("(max-width: 1280px)").matches
  )

  const [categories, setCategories] = useState<TariffCategory[]>(TariffsCategories.filter((category) => category.type === type))
  const [tariffs, setTariffs] = useState<Tariff[]>(Tariffs.filter((tariff) => tariff.category.type === type))

  const [currentCategory, setCurrentCategory] = useState<number>(categories[0].id)
  const [selectedTariff, setSelectedTariff] = useState<Tariff | null>(null)
  const [showConnectModal, setShowConnectModal] = useState(false)

  // form values
  const [phoneValue, setPhoneValue] = useState<string>('')
  const [userNameValue, setUserNameValue] = useState<string>('')
  const [addressValue, setAddressValue] = useState<string>('')
  const [convenientTime, setConvenientTime] = useState<string>('')
  const [personalDataAllowed, setPersonalDataAllowed] = useState<boolean>(false)

  useEffect(() => {
    setCategories(TariffsCategories.filter((category) => category.type === type))
    setTariffs(Tariffs.filter((tariff) => tariff.category.type === type))
    setCurrentCategory(TariffsCategories.filter((category) => category.type === type)[0].id)
  }, [type])

  const handlePhoneChange = (newValue: string) => {
    setPhoneValue(newValue)
  }

  const changeActiveCategory = (categoryId: number, target: HTMLButtonElement) => {
    setCurrentCategory(categoryId);
    target.blur()
  }

  const handleShowAboutModal = (id: number) => {
    const tariff = tariffs.find(tariff => tariff.id === id)
    setSelectedTariff(tariff ? tariff : null)
  }

  const handleShowConnectModalFromAbout = () => {
    if (selectedTariff) {
      handleShowConnectModal(selectedTariff.id)
      setSelectedTariff(null)
    }
  }

  const handleShowConnectModal = (id: number) => {
    setShowConnectModal(true)
  }

  const renderTariffsCards = (): JSX.Element[] => {
    const result: JSX.Element[] = []
    let cards: JSX.Element[] = []
    tariffs
      .filter(tariff => tariff.category.id === currentCategory)
      .forEach((tariff, index) => {
        cards.push(
          <TariffCard { ...tariff } key={tariff.name + tariff.id} onAboutCall={handleShowAboutModal} onConnectCall={handleShowConnectModal} />
        )
        if ((index + 1) % 5 === 0) {
          result.push(
            <div className="tariffs__cards" key={index}>
              { 
                isLaptop
                  ? cards.sort((a, b) => a.props.accent ? -1 : 1) 
                  : cards
              }
            </div>
          )
          cards = []
        }
      })
    if (cards.length !== 0) {
      result.push(
        <div className="tariffs__cards" key={'last-cards-row'}>
          { cards }
        </div>
      )
    }
    return result
  }

  return (
    <div className={["tariffs", className].join(' ')}>
      <div className="tariffs__categories">
        {
          categories.map((category) => {
            return (
              <button 
                className={[
                  "tariffs__category", currentCategory === category.id ? "tariffs__category_active" : ''
                ].join(' ')} 
                key={category.id}
                onClick={(event) => changeActiveCategory(category.id, event.target as HTMLButtonElement)}
              >
                { category.name }
                {
                  category.accent
                    ? <span className="tariffs__category-badge">Хит</span>
                    : null
                }
              </button>
            )
          })
        }
      </div>
      <OSlider navigationPositionY={!isLaptop ? 36 : 0} autoslide={false} buttonStyle="small" >
        {
          renderTariffsCards()
        }
      </OSlider>

      <OTeleport visible={!!selectedTariff} className='tariffs-modal-about'>
        <div className="tariffs-modal-about__blackout" onClick={() => setSelectedTariff(null)} />
        <div className="tariffs-modal-about__wrapper">
          <div className="tariffs-modal-about__header">
            <h2 className="tariffs-modal-about__title">Тариф «{selectedTariff?.name}»</h2>
            <button className="tariffs-modal-about__close-btn" onClick={() => setSelectedTariff(null)}><CloseIcon /></button>
          </div>
          <div className="tariffs-modal-about__content">
            <div className="tariffs-modal-about__technical">
              <p className="tariffs-modal-about__speed">{selectedTariff?.speed} Мбит/с</p>
              <ul className="tariffs-modal-about__list">
                {
                  selectedTariff?.features.map((item, index) => (
                    <li className="tariffs-modal-about__item" key={index}>
                      <span className="tariffs-modal-about__item-mark" />
                      { item }
                    </li>
                  ))
                }
              </ul>
              <p className="tariffs-modal-about__environment">Необходимое оборудование</p>
              <ul className="tariffs-modal-about__list">
                {
                  selectedTariff?.environment.map((item, index) => (
                    <li className="tariffs-modal-about__item" key={index}>
                      <span className="tariffs-modal-about__item-mark" />
                      { item }
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="tariffs-modal-about__promo">
              <p className="tariffs-modal-about__description">
                {
                  selectedTariff?.description
                }
              </p>
              <div className="tariffs-modal-about__bonuses">
                {
                  selectedTariff?.bonuses.map((item, index) => (
                    <div className="tariffs-modal-about__bonus" key={index}>
                      <img src={item.icon} alt={`${item.name} icon`} />
                      <p>{item.name}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="tariffs-modal-about__connect">
              <div className="tariffs-modal-about__price">
                <big>{selectedTariff?.price}</big> 
                <p>₽/мес</p>
              </div>
              <OButton size="big" click={handleShowConnectModalFromAbout}>Подключить</OButton>
            </div>
          </div>
        </div>
      </OTeleport>

      <OTeleport visible={showConnectModal} className='tariffs-modal-connect'>
        <div className="tariffs-modal-connect__blackout" onClick={() => setShowConnectModal(false)} />
        <div className="tariffs-modal-connect__wrapper">
          <div className="tariffs-modal-connect__header">
            <h2 className="tariffs-modal-connect__title">Заявка на подключение</h2>
            <button className="tariffs-modal-connect__close-btn" onClick={() => setShowConnectModal(false)}><CloseIcon /></button>
          </div>
          <div className="tariffs-modal-connect__content">
            <div className="tariffs-modal-connect__controls">
              <MaskInput className="tariffs-modal-connect__input" mask="+7 (DDD) DDD-DD-DD" onChange={handlePhoneChange} />
              <OInput colorScheme="dark" className="tariffs-modal-connect__input" placeholder="Как Вас зовут?" value={userNameValue} onChange={setUserNameValue} />
              <OInput colorScheme="dark" className="tariffs-modal-connect__input" placeholder="Адрес дома" value={addressValue} onChange={setAddressValue} />
              <OInput colorScheme="dark" className="tariffs-modal-connect__input" placeholder="Удобное время для звонка" value={convenientTime} onChange={setConvenientTime} />
              <OCheckbox colorScheme="dark" checked={personalDataAllowed} onChange={(value: boolean) => setPersonalDataAllowed(value)}>Нажимая на кнопку, я даю согласие на обработку персональных данных</OCheckbox>
            </div>
            <OButton className="tariffs-modal-connect__connect-btn" click={() => setShowConnectModal(false)}>Жду звонка</OButton>
          </div>
        </div>
      </OTeleport>
    </div>
  )
}