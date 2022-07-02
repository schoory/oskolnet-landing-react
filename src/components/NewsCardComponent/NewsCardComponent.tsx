
import { FC } from 'react'
import './NewsCardComponent.scss'
import { ArrowRightIcon } from './../icons/ArrowRightIcon';
import { Link } from 'react-router-dom';

type NewsCardComponentProps = {
  id: number,
  image: string,
  date: Date,
  description: string
}

export const NewsCard: FC<NewsCardComponentProps> = ({ id, image, date, description }) => {
  return (
    <article className="news-card">
      <img src={image} alt="News image" className='news-card__image' />
      <p className="news-card__date">{ date.toLocaleDateString() }</p>
      <p className="news-card__text">{ description }</p>
      <Link className="news-card__btn" to={`/news/${id}`}>Подробнее <ArrowRightIcon /> </Link>
    </article>
  )
}