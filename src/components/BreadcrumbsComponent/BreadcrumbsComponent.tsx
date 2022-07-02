import { FC } from "react"
import { Link } from "react-router-dom"
import { Breadcrumb } from "../../types"

import './BreadcrumbsComponent.scss'

type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[]
}

export const OBreadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs }) => {

  return (
    <div className="breadcrumbs">
      {
        breadcrumbs.map((item, index) => {
          const JSXItem: JSX.Element[] = []

          if (index < breadcrumbs.length - 1) {
            JSXItem.push(
              <Link to={item.to} key={item.to + index}>{item.name}</Link>
            )
            JSXItem.push(
              <p key={item.to + index + '/'}>/</p>
            )
          } else {
            JSXItem.push(
              <p key={item.to + index}>{item.name}</p>
            )
          }

          return JSXItem
        })
      }
    </div>
  )
}