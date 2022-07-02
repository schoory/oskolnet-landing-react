import { useEffect, useState } from 'react';
import { OBreadcrumbs } from './../../components/BreadcrumbsComponent/BreadcrumbsComponent';
import { OSection } from '../../components/SectionComponent/SectionComponent';
import { NewsCard } from '../../components/NewsCardComponent/NewsCardComponent';
import News from '../../assets/data/News.json';

import './NewsPage.scss'

export const NewsPage = () => {

  const [news, setNews] = useState(News.slice(0, 6))
  const [currentPage, setCurrentPage] = useState(0)

  const renderPagination = (): JSX.Element[] => {
    const result: JSX.Element[] = []
    const pageCount = Math.ceil(News.length / 6)
    for (let i = 0; i < pageCount; i++) {
      result.push(
        <button 
          className={['news-page__nav', i === currentPage ? 'news-page__nav_active' : ''].join(' ')} 
          onClick={() => setCurrentPage(i)}
          key={i}
        >{i + 1}</button>
      )      
    }
    return result
  }

  useEffect(() => {
    setNews(News.slice(currentPage * 6, currentPage * 6 + 6))
  }, [currentPage])

  return (
    <div className="news-page">
      <OBreadcrumbs breadcrumbs={[
        { name: 'Главная', to: "/" },
        { name: 'Новости', to: "/news" },
      ]} />
      <OSection title='Новости'>
        <div className='news-page__wrapper'>
          <div className="container news-page__grid">
            {
              news.map((item, index) => (
                <NewsCard {...item} date={new Date(item.date)} key={item.id} />
              ))
            }
          </div>
          <div className="container news-page__pagination">
            {
              renderPagination()
            }
          </div>
        </div>
      </OSection>
    </div>
  )
}