import './HomePage.scss'
import { OSlider } from './../../components/SliderComponent/SliderComponent';
import { OButton } from './../../components/ButtonComponent/ButtonComponent';
import { OSection } from './../../components/SectionComponent/SectionComponent';
import { TariffsSlider } from './../../components/TariffsComponent/TariffsComponent';
import { ConsultForm } from './../../components/ConsultFormComponent/ConsultFormComponent';
import { ONotification } from './../../components/NotificationComponent/NotificationComponent';
import { useState } from 'react';
import { CheckAddressForm } from './../../components/CheckAddressComponent/CheckAddressComponent';
import { NewsCard } from './../../components/NewsCardComponent/NewsCardComponent';

import News from '../../assets/data/News.json'
import { FileIcon } from './../../components/icons/FileIcon';

export const HomePage = () => {

  const [isLaptop, setIsLaptop] = useState(
    window.matchMedia("(max-width: 1280px)").matches
  )
  const [isTablet, setIsTablet] = useState(
    window.matchMedia("(max-width: 912px)").matches
  )

  const [news, setNews] = useState([ News[0], News[1], News[2] ])

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

  const renderSmallDisplayNews = (): JSX.Element[] => {
    const result: JSX.Element[] = []
    let cards: JSX.Element[] = []
    news.forEach((item, index) => {
        cards.push(
          <NewsCard { ...item } key={item.date + item.id} date={new Date(item.date)} />
        )
        if ((index + 1) % (isTablet ? 1 : 2) === 0) {
          result.push(
            <div className="news-section__cards" key={index}>
              { cards }
            </div>
          )
          cards = []
        }
      })
    if (cards.length !== 0) {
      result.push(
        <div className="news-section__cards" key={'last-cards-row'}>
          { cards }
        </div>
      )
    }
    return result
  }

  return (
    <main>
      <section className='banner'>
        <div className='container'>
          <div className='banner__wrapper'>
            <OSlider>
              <div className='banner__item'>
                <div className="banner__item-header">
                  <p className="banner__item-title banner__item-title_accent">
                    Интернет
                  </p>
                  <p className="banner__item-title">
                    на высокой скорости
                  </p>  
                </div>
                <OButton className='banner__item-btn'>Выбрать тариф</OButton>
                {
                  isTablet
                    ? <img src="https://schoory.github.io/oskolnet-landing-pages/images/slider-item-sm.png" alt="Высокоскоростной интернет" />
                    : null
                }
              </div>
              <div className='banner__item'>
                <div className="banner__item-header">
                  <p className="banner__item-title banner__item-title_accent">
                    Интернет #2
                  </p>
                  <p className="banner__item-title">
                    на высокой скорости
                  </p>  
                </div>
                <OButton className='banner__item-btn' to='/tariffs/for-business'>Выбрать тариф для дома</OButton>
                {
                  isTablet
                    ? <img src="https://schoory.github.io/oskolnet-landing-pages/images/slider-item-sm.png" alt="Высокоскоростной интернет" />
                    : null
                }
              </div>
              <div className='banner__item'>
                <div className="banner__item-header">
                  <p className="banner__item-title banner__item-title_accent">
                    Интернет #3
                  </p>
                  <p className="banner__item-title">
                    на высокой скорости
                  </p>  
                </div>
                <OButton className='banner__item-btn' to='/tariffs/for-business'>Выбрать тариф для бизнеса</OButton>
                {
                  isTablet
                    ? <img src="https://schoory.github.io/oskolnet-landing-pages/images/slider-item-sm.png" alt="Высокоскоростной интернет" />
                    : null
                }
              </div>
            </OSlider>
          </div>
        </div>
      </section>
      <OSection title='Тарифы для дома' className='tariffs-section'>
        <div className='container tariffs-section__wrapper'>
          <div className='tariffs-section__slider'>
            <TariffsSlider className="tariffs-section-no-shadow" />
            <OButton className='tariffs-section__btn' to='/tariffs/for-home'>Все тарифы</OButton>
          </div>
          <div className="tariffs-section__forms">
            <ConsultForm onApply={handleApplyConsultationForm} onError={handleErrorConsultationForm} />
            <CheckAddressForm />
            <div className="tariffs-section__speedtest">
              <h3 className="tariffs-section__speedtest-title">Проверить скорость интернета</h3>
              <OButton className='tariffs-section__speedtest-btn' to='/speedtest'>Проверить</OButton>
            </div>
          </div>
        </div>
      </OSection>
      <OSection title='О компании' className='about-section' colorScheme='light'>
        <div className='container about-section__wrapper'>
          <div className='about-section__content'>
            <img src="https://schoory.github.io/oskolnet-landing-pages/images/oskolnet-car.png" alt="" className="about-section__image" />
            <p className="about-section__text">
              Сегодня – это крупнейшая компания в Старом Осколе с широким спектром телекоммуникационных услуг: Интернет, телефония, IP телевидение, видеонаблюдение.
              <br /><br />
              Мы улучшаем качество жизни людей, предоставляя возможность свободного общения в информационном сообществе. Предлагаем самые современные Интернет технологии наивысшего качества. 
            </p>
          </div>
          <OButton className='about-section__btn' to='/about'>Подробно о компании</OButton>
        </div>
      </OSection>
      <OSection title='Новости' className='news-section'>
        <div className='container news-section__wrapper'>
          {
            isTablet
              ? (
                <OSlider buttonStyle='small' autoslide={false} navigationPositionY={0}>
                  {
                    renderSmallDisplayNews()
                  }
                </OSlider>
              )
              : isLaptop
              ? (
                <OSlider buttonStyle='small' autoslide={false} hideOverflowedItems={false} navigationPositionY={0}>
                  {
                    renderSmallDisplayNews()
                  }
                </OSlider>
              )
              : (
                <div className='news-section__content'>
                {
                  news.map((item) => {
                    return (
                      <NewsCard 
                        {...item}
                        date={new Date(item.date)}
                        key={item.id}
                      />
                    )
                  })
                }
                </div>
              )
          }
          <OButton className='news-section__btn' to='/news'>Все новости</OButton>
        </div>
      </OSection>
      <OSection title='Документы' className='docs-section' colorScheme='light'>
        <div className='container docs-section__wrapper'>
          <div className="docs-section__content">
            <a className="docs-section__item" href='files/doc.txt' download>
              <div className="docs-section__icon"><FileIcon /></div>
              <p className="docs-section__filename">Договор оферты на оказание услуг связи (Интернет)</p>
            </a>
            <a className="docs-section__item" href='files/doc.txt' download>
              <div className="docs-section__icon"><FileIcon /></div>
              <p className="docs-section__filename">Договор оферты на оказание услуг связи (Цифровое Телевидение)</p>
            </a>
            <a className="docs-section__item" href='files/doc.txt' download>
              <div className="docs-section__icon"><FileIcon /></div>
              <p className="docs-section__filename">Лицензия 1</p>
            </a>
          </div>
          <OButton className='docs-section__btn' to='/docs'>Все документы</OButton>
        </div>
      </OSection>
      <OSection title='Партнеры' className='partners-section'>
        <div className='container partners-section__wrapper'>
            {
              isTablet 
                ? (
                  <OSlider autoslide={true} slideInterval={7000} navigationPositionY={0} buttonStyle='small' controlsEnabled={true}>
                    <div className="partners-section__logo">
                      <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-1.png" alt="Смотрёшка" />
                    </div>
                    <div className="partners-section__logo">
                      <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-2.png" alt="Сбербанк" />
                    </div>
                    <div className="partners-section__logo">
                      <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-3.png" alt="OnLife" />
                    </div>
                    <div className="partners-section__logo">
                      <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-4.png" alt="Play room" />
                    </div>
                    <div className="partners-section__logo">
                      <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-1.png" alt="Смотрёшка" />
                    </div>
                    <div className="partners-section__logo">
                      <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-2.png" alt="Сбербанк" />
                    </div>
                    <div className="partners-section__logo">
                      <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-3.png" alt="OnLife" />
                    </div>
                    <div className="partners-section__logo">
                      <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-4.png" alt="Play room" />
                    </div>
                    <div className="partners-section__logo">
                      <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-1.png" alt="Смотрёшка" />
                    </div>
                    <div className="partners-section__logo">
                      <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-2.png" alt="Сбербанк" />
                    </div>
                    <div className="partners-section__logo">
                      <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-3.png" alt="OnLife" />
                    </div>
                    <div className="partners-section__logo">
                      <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-4.png" alt="Play room" />
                    </div>
                  </OSlider>
                )
                : isLaptop
                ? (
                  <OSlider autoslide={true} slideInterval={7000} navigationPositionY={0} buttonStyle='small' controlsEnabled={true}>
                    <div className='partners-section__container'>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-1.png" alt="Смотрёшка" />
                      </div>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-2.png" alt="Сбербанк" />
                      </div>
                    </div>
                    <div className='partners-section__container'>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-3.png" alt="OnLife" />
                      </div>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-4.png" alt="Play room" />
                      </div>
                    </div>
                    <div className='partners-section__container'>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-1.png" alt="Смотрёшка" />
                      </div>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-2.png" alt="Сбербанк" />
                      </div>
                    </div>
                    <div className='partners-section__container'>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-3.png" alt="OnLife" />
                      </div>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-4.png" alt="Play room" />
                      </div>
                    </div>
                    <div className='partners-section__container'>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-1.png" alt="Смотрёшка" />
                      </div>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-2.png" alt="Сбербанк" />
                      </div>
                    </div>
                    <div className='partners-section__container'>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-3.png" alt="OnLife" />
                      </div>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-4.png" alt="Play room" />
                      </div>
                    </div>
                  </OSlider>
                )
                : (
                  <OSlider autoslide={true} slideInterval={7000} navigationPositionY={0} buttonStyle='small' controlsEnabled={true}>
                    <div className='partners-section__container'>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-1.png" alt="Смотрёшка" />
                      </div>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-2.png" alt="Сбербанк" />
                      </div>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-3.png" alt="OnLife" />
                      </div>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-4.png" alt="Play room" />
                      </div>
                    </div>
                    <div className='partners-section__container'>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-1.png" alt="Смотрёшка" />
                      </div>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-2.png" alt="Сбербанк" />
                      </div>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-3.png" alt="OnLife" />
                      </div>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-4.png" alt="Play room" />
                      </div>
                    </div>
                    <div className='partners-section__container'>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-1.png" alt="Смотрёшка" />
                      </div>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-2.png" alt="Сбербанк" />
                      </div>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-3.png" alt="OnLife" />
                      </div>
                      <div className="partners-section__logo">
                        <img src="https://schoory.github.io/oskolnet-landing-pages/images/partner-4.png" alt="Play room" />
                      </div>
                    </div>
                  </OSlider>
                )
            }
        </div>
      </OSection>
      <ONotification visible={notification.visible} className="tariffs-section__notification" style={notification.style as ('error' | 'success')}>
        <p>{notification.message}</p>
      </ONotification>
    </main>
  )
}