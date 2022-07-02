
import { useLayoutEffect, useRef, useState } from 'react'
import './SpeedtestComponent.scss'
import { OButton } from './../ButtonComponent/ButtonComponent';

const dictionary = [
  [0, 150], [1, 180], [5, 210], [10, 240], 
  [20, 270], [30, 300], [50, 330], [75, 360], [100, 390]
]

export const OSpeedtest = () => {
  
  const canvas = useRef<HTMLCanvasElement | null>(null)
  const ctx = useRef<CanvasRenderingContext2D | null>(null)

  const [currentSpeed, setCurrentSpeed] = useState(0)
  const timer = useRef<NodeJS.Timer | null>(null)
  const currentSpeedRef = useRef<number>(0)

  const [finalValues, setFinalValues] = useState({
    ping: 0,
    download: 0,
    upload: 0
  })

  /**
   * Останавливает проверку скорости
   */
  const stopSpeedtest = () => {
    if (timer.current) {
      clearInterval(timer.current)
    }
    setFinalValues({
      ping: Math.round(Math.random() * 100),
      download: +(Math.random() * 500).toFixed(1),
      upload: +(Math.random() * 500).toFixed(1)
    })
    timer.current = null
    ctx.current = null
  }

  /**
   * Очищает канву и рисует контейнер для индикатора
   */
  const clearCanvas = () => {
    if (canvas.current && canvas.current.getContext) {
      ctx.current = canvas.current.getContext('2d')
      if (ctx.current) {
        ctx.current.clearRect(0, 0, 354, 354)
        ctx.current.strokeStyle = '#263057'
        ctx.current.beginPath();
        ctx.current.arc(177, 177, 165, 5 * Math.PI / 6, Math.PI / 6, false);
        ctx.current.lineWidth = 20
        ctx.current.stroke();
        ctx.current = null; 
      }
    }
  }
  
  // по готовности отрисовываем канву
  useLayoutEffect(() => {
    clearCanvas()
  }, [])

  /**
   * Получает значение градуса на канве для передаваемой скорости
   * @param currentSpeed Текущая скорость
   * @returns Значение градуса на канве для текущей скорости 
   */
  const getIndicatorDegree = (currentSpeed: number): number => {
    // если значение скорости больше 100 - возвращаем значение для 100 (390deg)
    if (currentSpeed > 100) return 390

    // получаем соответствие порога скорости и значение градуса (1Mbps = 180deg, 20Mbps = 270deg, etc.)
    const dictionaryValue = dictionary.find((item, index, array) => {
      // если следующего значения нет - значит значение скорости = 100
      if (!array[index + 1]) return true
      // получение промежутка значений
      return currentSpeed >= item[0] && currentSpeed < dictionary[index + 1][0]
    })

    // из-за разности в интервалах скоростей значение градусов не соответствует 2.4deg на 1Mbps
    // получение корректных значений
    if (dictionaryValue) {
      switch (dictionaryValue[0]) {
        case 0:
          return dictionaryValue[1] + (currentSpeed - dictionaryValue[0]) * 30
        case 1:
        case 5:
          return dictionaryValue[1] + (currentSpeed - dictionaryValue[0]) * 6
        case 10: 
        case 20:
          return dictionaryValue[1] + (currentSpeed - dictionaryValue[0]) * 2.4
        case 30:
          return dictionaryValue[1] + (currentSpeed - dictionaryValue[0]) * 1.2
        case 50:
          return dictionaryValue[1] + (currentSpeed - dictionaryValue[0]) * 1.2
        case 75:
          return dictionaryValue[1] + (currentSpeed - dictionaryValue[0]) * 1.2
        case 100: 
          return dictionaryValue[1]
      }
    }

    return 150 // если ничего не подошло, значит значение скорости минусовое, возвращаем начальное значение (0Mbps = 150deg)
  }
  
  const renderIndicator = () => {
    if (ctx.current) {
      // Очистка canvas
      ctx.current.clearRect(0, 0, 354, 354)

      // Отрисовка контейнера для индикатора
      ctx.current.strokeStyle = '#263057'
      ctx.current.beginPath();
      ctx.current.arc(177, 177, 165, 5 * Math.PI / 6, Math.PI / 6, false);
      ctx.current.lineWidth = 20
      ctx.current.stroke();

      // Отрисовка индикатора
      ctx.current.strokeStyle = '#6984F0'
      ctx.current.beginPath();
      const startAngle = Math.PI - (Math.PI - (5 * Math.PI / 6)) // Начальный угол = 150deg
      // Формула преобразования градусов в радианы 
      // α[рад] = a[°] × (π / 180°)
      const endAngle = getIndicatorDegree(currentSpeedRef.current) * (Math.PI / 180) // Конечный угол
      ctx.current.arc(177, 177, 165, startAngle, endAngle, false);
      ctx.current.lineWidth = 20
      ctx.current.stroke();
    }
  }

  /**
   * Активирует/отключает тест скорости
   */
  const toggleSpeedtest = () => {

    // отключение теста 
    if (timer.current !== null) { 
      stopSpeedtest()
      return
    }

    let timeout = 0
    // активация теста, обновление каждые 250ms
    timer.current = setInterval(() => {
      // если канвы нет - создаем
      if (canvas.current && canvas.current.getContext) {
        ctx.current = canvas.current.getContext('2d')
      }

      // генерирует случайную скорость, округляет до десятых
      const speed = +(Math.random() * 100).toFixed(1)

      currentSpeedRef.current = speed // нереактивное значение для отрисовки индикатора
      setCurrentSpeed(speed) // реактивное значение для отрисовки стрелки

      renderIndicator() // отрисовка индикатора

      timeout += 250
      if (timeout === 10000) {
        stopSpeedtest()
        return
      }
    }, 250)
  }

  return (
      <div className='o-speedtest'>
        <div className='o-speedtest__wrapper'>
          <div className="o-speedtest__tester">
            <div className='o-speedtest__tester-angelwrapper'><p className="o-speedtest__tester-mark">0</p></div>
            <div className='o-speedtest__tester-angelwrapper'><p className="o-speedtest__tester-mark">1</p></div>
            <div className='o-speedtest__tester-angelwrapper'><p className="o-speedtest__tester-mark">5</p></div>
            <div className='o-speedtest__tester-angelwrapper'><p className="o-speedtest__tester-mark">10</p></div>
            <div className='o-speedtest__tester-angelwrapper'><p className="o-speedtest__tester-mark">20</p></div>
            <div className='o-speedtest__tester-angelwrapper'><p className="o-speedtest__tester-mark">30</p></div>
            <div className='o-speedtest__tester-angelwrapper'><p className="o-speedtest__tester-mark">50</p></div>
            <div className='o-speedtest__tester-angelwrapper'><p className="o-speedtest__tester-mark">75</p></div>
            <div className='o-speedtest__tester-angelwrapper'><p className="o-speedtest__tester-mark">100</p></div>
            <div className="o-speedtest__tester-arrow" style={{ transform: `translate(-50%, -50%) rotate(${getIndicatorDegree(currentSpeed)}deg)` }} />
            <div className="o-speedtest__speed">
              <p>{ currentSpeed }</p>
              <small>Mbps</small>
            </div>
          </div>
          <canvas width='354px' height='354px' ref={canvas} style={{ position: 'absolute' }}>
            This browser doesnt support canvas
          </canvas>
        </div>
        <div className="o-speedtest__indicators">
          <div className="o-speedtest__indicator">
            <p className="o-speedtest__name">Ping</p>
            <p className="o-speedtest__value">{ finalValues.ping }</p>
            <small className='o-speedtest__unit'>ms</small>
          </div>
          <div className="o-speedtest__indicator">
            <p className="o-speedtest__name">Скачать</p>
            <p className="o-speedtest__value">{ finalValues.download }</p>
            <small className='o-speedtest__unit'>Mbps</small>
          </div>
          <div className="o-speedtest__indicator">
            <p className="o-speedtest__name">Загрузить</p>
            <p className="o-speedtest__value">{ finalValues.upload }</p>
            <small className='o-speedtest__unit'>Mbps</small>
          </div>
        </div>
        <p className="o-speedtest__text">Уважаемые абоненты, вы можете замерить скорость соединения, нажав на кнопку «Тестировать»</p>
        <OButton className='o-speedtest__start-btn' size='big' click={toggleSpeedtest}>{ timer.current ? 'Отмена' : 'Тестировать' }</OButton>
      </div>
  )

}