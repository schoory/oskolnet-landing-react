
import './AboutPage.scss';
import { OBreadcrumbs } from './../../components/BreadcrumbsComponent/BreadcrumbsComponent';
import { OSection } from '../../components/SectionComponent/SectionComponent';

export const AboutPage = () => {
  return (
    <div className="about-page">
      <OBreadcrumbs breadcrumbs={[
        { name: 'Главная', to: '/' },
        { name: 'О компании', to: '/about' }
      ]} />
      <OSection title='О компании' colorScheme='light'>
        <div className="container about-page__wrapper">
          <div className="about-page__mission">
            <div className="about-page__mission-content">
              <h3>Миссия компании</h3>
              <p>
                Основная цель деятельности компании IT-Telecom заключается в предоставлении Заказчикам качественных и надёжных услуг, основанных на высоком профессионализме наших сотрудников и применении современных и инновационных технологий. 
                <br /><br />
                Мы стремимся максимально полно удовлетворять потребности и пожелания наших Заказчиков, демонстрируя гибкий и индивидуальный подход к запросам каждого из них.
              </p>
            </div>
            <img src="https://schoory.github.io/oskolnet-landing-pages/images/about-1.png" alt="Миссия компании" />
          </div>
          <div className="about-page__about">
            <div className="about-page__about-content">
              <p>
                Закрытое акционерное общество «Осколнэт» основано 4 апреля 1997 года.
                <br /><br />
                Сегодня – это крупнейшая компания в Старом Осколе с широким спектром телекоммуникационных услуг: Интернет, телефония, IP телевидение, видеонаблюдение.
                <br /><br />
                Мы улучшаем качество жизни людей, предоставляя возможность свободного общения в информационном сообществе. Предлагаем самые современные Интернет технологии наивысшего качества. 
                <br /><br />
                За долгие годы работы «Осколнэт» зарекомендовал себя как надежный провайдер, предоставляющий качественную услугу за доступную цену.
              </p>
            </div>
            <img src="https://schoory.github.io/oskolnet-landing-pages/images/about-2.png" alt="Миссия компании" />
          </div>
          <div className="about-page__dynamics">
            <h3 className='about-page__dynamics-title'>Динамика развития</h3>
            <div className="about-page__dynamics-wrapper">
              <div className="about-page__dynamics-parameters">
                <div className="about-page__dynamics-parameter">
                  <p>&gt; 25</p>
                  <small>лет истории</small>
                </div>
                <div className="about-page__dynamics-parameter">
                  <p>&gt; 50</p>
                  <small>сотрудников</small>
                </div>
                <div className="about-page__dynamics-parameter">
                  <p>&gt; 450</p>
                  <small>подключенных домов</small>
                </div>
                <div className="about-page__dynamics-parameter">
                  <p>&gt; 5000</p>
                  <small>Гб данных передаются каждую минуту</small>
                </div>
              </div>
              <img src="https://schoory.github.io/oskolnet-landing-pages/images/about-3.png" alt="Миссия компании" />
            </div>
          </div>
          <div className="about-page__features">
            <h3 className='about-page__features-title'>Лучшие, потому что</h3>
            <div className="about-page__features-wrapper">
              <div className="about-page__features-item">
                <img src="https://schoory.github.io/oskolnet-landing-pages/images/bonuses/bonus-1.png" alt="Современные" />
                <p className='about-page__features-item-title'>Современные</p>
                <p className="about-page__features-item-text">Используем современные технологии и ставим интересы клиента на первое место.</p>
              </div>
              <div className="about-page__features-item">
                <img src="https://schoory.github.io/oskolnet-landing-pages/images/bonuses/bonus-2.png" alt="Оперативные" />
                <p className='about-page__features-item-title'>Оперативные</p>
                <p className="about-page__features-item-text">Выполняем все поставленные задачи оперативно и в заявленные сроки.</p>
              </div>
              <div className="about-page__features-item">
                <img src="https://schoory.github.io/oskolnet-landing-pages/images/bonuses/bonus-3.png" alt="Надёжные" />
                <p className='about-page__features-item-title'>Надёжные</p>
                <p className="about-page__features-item-text">Мы гарантируем, что наши услуги будут работать надёжно. Мы хотим, чтобы вы и ваши близкие чувствовали ...</p>
              </div>
              <div className="about-page__features-item">
                <img src="https://schoory.github.io/oskolnet-landing-pages/images/bonuses/bonus-4.png" alt="Открытые" />
                <p className='about-page__features-item-title'>Открытые</p>
                <p className="about-page__features-item-text">Вы всегда можете узнать, кто и что делает ...</p>
              </div>
            </div>
          </div>
          <div className="about-page__gallery">
            <h3 className='about-page__gallery-title'>Фотогалерея</h3>
            <div className="about-page__gallery-wrapper">
              <img src="https://schoory.github.io/oskolnet-landing-pages/images/gallery-1.png" alt="Фотогалереия 1" />
              <img src="https://schoory.github.io/oskolnet-landing-pages/images/gallery-2.png" alt="Фотогалереия 2" />
              <img src="https://schoory.github.io/oskolnet-landing-pages/images/gallery-3.png" alt="Фотогалереия 3" />
            </div>
          </div>
        </div>
      </OSection>
    </div>
  )
}