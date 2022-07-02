import { FC, ReactNode } from "react"
import ReactDOM from "react-dom"
import './NotificationComponent.scss'

type NotificationComponentProps = {
  className?: string,
  children: ReactNode,
  container?: HTMLElement,
  visible: boolean,
  style?: 'success' | 'error'
}

export const ONotification: FC<NotificationComponentProps> = ({ visible = true, style = 'success', className = '', children, container = document.body }) => {
  
  if (visible) {
    return ReactDOM.createPortal(
      <div className={["o-notification", style === 'error' ? 'o-notification_error' : 'o-notification_success', className].join(' ')}>{children}</div>,
      container
    )
  } else {
    return <></>
  }
}