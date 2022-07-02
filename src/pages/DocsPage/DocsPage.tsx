import { OBreadcrumbs } from '../../components/BreadcrumbsComponent/BreadcrumbsComponent' 
import { OSection } from '../../components/SectionComponent/SectionComponent'
import { FileIcon } from '../../components/icons/FileIcon'
import './DocsPage.scss'

export const DocsPage = () => {
  return (
    <div className="docs-page">
      <OBreadcrumbs breadcrumbs={[
        { name: 'Главная', to: '/' },
        { name: 'Документы', to: '/docs' }
      ]} />
      <OSection title='Документы' colorScheme='light'>
        <div className="container docs-page__wrapper">
          <h3 className="docs-page__group-title">Договоры</h3>
          <div className="docs-page__group">
            <a href="/files/doc.txt" download className="docs-page__group-item">
              <FileIcon />
              <div className="docs-page__fileinfo">
                <p className="docs-page__filename">Договор оферты на оказание услуг связи (Интернет)</p>
                <p className="docs-page__filesize">758,55 Кб</p>
              </div>
            </a>
            <a href="/files/doc.txt" download className="docs-page__group-item">
              <FileIcon />
              <div className="docs-page__fileinfo">
                <p className="docs-page__filename">Договор оферты на оказание услуг связи (Цифровое Телевидение)</p>
                <p className="docs-page__filesize">758,55 Кб</p>
              </div>
            </a>
          </div>
          <h3 className="docs-page__group-title">Лицензии</h3>
          <div className="docs-page__group">
            <a href="/files/doc.txt" download className="docs-page__group-item">
              <FileIcon />
              <div className="docs-page__fileinfo">
                <p className="docs-page__filename">Лицензия 1</p>
                <p className="docs-page__filesize">758,55 Кб</p>
              </div>
            </a>
            <a href="/files/doc.txt" download className="docs-page__group-item">
              <FileIcon />
              <div className="docs-page__fileinfo">
                <p className="docs-page__filename">Лицензия 2</p>
                <p className="docs-page__filesize">758,55 Кб</p>
              </div>
            </a>
          </div>
          <h3 className="docs-page__group-title">Реквизиты</h3>
          <div className="docs-page__group">
            <a href="/files/doc.txt" download className="docs-page__group-item">
              <FileIcon />
              <div className="docs-page__fileinfo">
                <p className="docs-page__filename">Реквизиты организации</p>
                <p className="docs-page__filesize">758,55 Кб</p>
              </div>
            </a>
          </div>
          <h3 className="docs-page__group-title">Прочие документы</h3>
          <div className="docs-page__group">
            <a href="/files/doc.txt" download className="docs-page__group-item">
              <FileIcon />
              <div className="docs-page__fileinfo">
                <p className="docs-page__filename">Выписка из Кодекса РФ о Договоре оферты</p>
                <p className="docs-page__filesize">758,55 Кб</p>
              </div>
            </a>
            <a href="/files/doc.txt" download className="docs-page__group-item">
              <FileIcon />
              <div className="docs-page__fileinfo">
                <p className="docs-page__filename">Политика в отношении обработки персональных данных</p>
                <p className="docs-page__filesize">758,55 Кб</p>
              </div>
            </a>
          </div>
        </div>
      </OSection>
    </div>
  )
}