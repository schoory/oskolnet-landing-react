
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { OBreadcrumbs } from './../../components/BreadcrumbsComponent/BreadcrumbsComponent';
import { OSection } from '../../components/SectionComponent/SectionComponent';
import { News } from '../../types'
import NewsList from '../../assets/data/News.json'
import './PostPage.scss'
import { OButton } from './../../components/ButtonComponent/ButtonComponent';
import { ArrowRightIcon } from '../../components/icons/ArrowRightIcon';

export const PostPage = () => {

  const params = useParams()
  const [post, setPost] = useState<News | null>(null)

  useEffect(() => {
    if (params.id) {
      const post = NewsList.find(item => item.id.toString() === params.id)
      setPost(post ? post : null)
    }
  }, [params])


  return (
    <div className="post-page">
      <OBreadcrumbs breadcrumbs={[
        { name: 'Главная', to: '/' },
        { name: 'Новости', to: '/news' },
        { name: post ? post.name : 'Неизвестное название', to: `/news${post ? '/' + post.id.toString() : ''}` },
      ]} />
      <OSection title={post?.name} colorScheme='light'>
        <div className="container post-page__wrapper">
          <div className='post-page__content'>
            <p className="post-page__date">{ post ? new Date(post.date).toLocaleDateString() : 'Неизвестно' }</p>
            <div className="post-page__text">
              {
                post
                  ? post.text.split('\n').map((textPart) => (
                    <p>{textPart}</p>
                  ))
                  : 'Неизвестно'
              }
            </div>
            <OButton to='/news'><ArrowRightIcon /> К списку новостей</OButton>
          </div>
          <img src={post?.image} alt="Post image" className='post-page__image' />
        </div>
      </OSection>
    </div>
  )
}