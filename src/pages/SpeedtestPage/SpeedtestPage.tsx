
import { OSection } from '../../components/SectionComponent/SectionComponent'
import { OBreadcrumbs } from './../../components/BreadcrumbsComponent/BreadcrumbsComponent';

import './SpeedtestPage.scss'
import { OSpeedtest } from './../../components/SpeedtestComponent/SpeedtestComponent';

export const SpeedtestPage = () => {
  return (
    <div className="speedtest-page">
      <OBreadcrumbs breadcrumbs={[
        { name: 'Главная', to: '/' },
        { name: 'Тест скорости', to: '/speedtest' },
      ]} />
      <OSection title='Тест скорости' colorScheme='light'>
        <div className="container speedtest-page__wrapper">
          <OSpeedtest />
        </div>
      </OSection>
    </div>
  )
}