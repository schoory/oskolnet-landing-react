import { FC, ReactNode, useEffect, useRef, useState } from "react"
import { ChevronLeftIcon } from "../icons/ChevronLeftIcon"
import { ChevronRightIcon } from "../icons/ChevronRightIcon"
import './SliderComponent.scss'

type SliderComponentProps = {
  slideInterval?: number 
  autoslide?: boolean
  buttonStyle?: 'normal' | 'small'
  navigationPositionY?: number
  children?: ReactNode,
  controlsEnabled?: boolean,
  hideOverflowedItems?: boolean
}

export const OSlider: FC<SliderComponentProps> = ({ children, navigationPositionY = 48, buttonStyle = 'normal', slideInterval = 5000, autoslide = true, controlsEnabled = false, hideOverflowedItems = true }) => {

  const [activeItem, setActiveItem] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const firstElement = useRef<HTMLDivElement>(null)
  const timer = useRef<NodeJS.Timer | null>(null)

  // Автоматическое переключение слайдов
  useEffect(() => {
    if (autoslide) {
      const maxItem = Array.isArray(children) ? children.length - 1 : 0
      if (maxItem > 0 && !isPaused) {
        timer.current = setInterval(() => {
          changeActiveItem(activeItem + 1 > maxItem ? 0 : activeItem + 1)
        }, slideInterval)
      }
      return () => {
        clearInterval(timer.current as NodeJS.Timer)
      }
    }
  }, [activeItem])

  /**
   * Переключает на следующий слайд
   */
  const nextSlide = () => {
    const maxItem = Array.isArray(children) ? children.length - 1 : 0
    if (maxItem > 0) {
      changeActiveItem(activeItem + 1 > maxItem ? 0 : activeItem + 1)
    }
  }
  /**
   * Переключает на предыдущий слайд
   */
  const previousSlide = () => {
    const maxItem = Array.isArray(children) ? children.length - 1 : 0
    if (maxItem > 0) {
      changeActiveItem(activeItem - 1 < 0 ? maxItem : activeItem - 1)
    }
  }

  /**
   * Изменяет отступ первого элемента так, чтобы новый активный элемент был в области видимости
   * @param newActiveItem Индекс нового активного элемента
   */
  const changeActiveItem = (newActiveItem: number) => {
    if (activeItem !== newActiveItem && firstElement.current) {
      firstElement.current.style.marginLeft = -(firstElement.current.clientWidth * newActiveItem)  + 'px'
      setActiveItem(newActiveItem)
    }
  }

  /**
   * Останавливает автоматическое переключение слайдов при наведении мыши на слайдер
   */
  const pauseAutoslideOnHover = () => {
    if (autoslide) {
      setIsPaused(true)
      clearInterval(timer.current as NodeJS.Timer)
    }
  }

  /**
   * Продолжает автомтаическое переключение слайдов при покидании мыши слайдера
   */
  const unpauseAutoslideOnLeave = () => { 
    if (autoslide) {
      setIsPaused(false)
      const maxItem = Array.isArray(children) ? children.length - 1 : 0
      setTimeout(() => {
        changeActiveItem(activeItem + 1 > maxItem ? 0 : activeItem + 1)
      }, slideInterval)
    }
  }

  /**
   * Оборачивает элементы слайдера в контейнер 
   * @returns Слайды
   */
  const renderSliderItems = (): JSX.Element[] => {
    const result: JSX.Element[] = []
    if (!!children) {
      if (Array.isArray(children)) {
        children.forEach((item, index) => result.push(
          <div 
            className={[
              "o-slider__item", 
              index === activeItem ? 'o-slider__item_active' : ""
          ].join(' ')}
            ref={index === 0 ? firstElement : null}
            key={index}
          >{ item }</div>
        ))
      } else {
        result.push(<div className="o-slider__item o-slider__item_active" key={0} ref={firstElement}>{ children }</div>)
      }
    }
    return result
  }

  /**
   * Создает кнопки навигации в зависимости от количества слайдов
   * @returns Кнопки навигации
   */
  const renderNavigation = (): JSX.Element[] => {
    const result: JSX.Element[] = []
    if (!!children) {
      if (Array.isArray(children)) {
        children.forEach((item, index) => result.push(
          <button 
            className={[
              "o-slider__navigation-btn", 
              activeItem === index ? 'o-slider__navigation-btn_active' : '',
              buttonStyle === 'small' ? 'o-slider__navigation-btn_small' : ''
            ].join(' ')} 
            key={index} 
            onClick={() => changeActiveItem(index)}
          />
        ))
      } else {
        result.push(
          <button 
            className={[
              "o-slider__navigation-btn", 
              "o-slider__navigation-btn_active",
              buttonStyle === 'small' ? 'o-slider__navigation-btn_small' : ''
          ].join(' ')}
            key={0} 
          />
        )
      }
    }
    return result
  }
  
  return (
    <div className="o-slider" onMouseEnter={pauseAutoslideOnHover} onMouseLeave={unpauseAutoslideOnLeave}>
      <div className="o-slider__controls">
        {
          controlsEnabled
            ? <button className="o-slider__control" onClick={previousSlide}><ChevronLeftIcon /></button>
            : null
        }
        <div className="o-slider__wrapper" style={{ overflow: hideOverflowedItems ? 'hidden' : 'visible' }}>
          {
            renderSliderItems()
          }
        </div>
        {
          controlsEnabled
            ? <button className="o-slider__control" onClick={nextSlide}><ChevronRightIcon /></button>
            : null
        }
      </div>
      <div className="o-slider__navigation" style={{ bottom: navigationPositionY + 'px' }}>
        {
          renderNavigation()
        }
      </div>
    </div>
  )
}