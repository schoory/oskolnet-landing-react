import { FC, ReactNode } from "react"
import ReactDOM from "react-dom"
import './TeleportComponent.scss'

type TeleportContainerProps = {
  className?: string,
  children: ReactNode,
  container?: HTMLElement,
  visible: boolean
}

export const OTeleport: FC<TeleportContainerProps> = ({ visible = true, className = '', children, container = document.body }) => {
  
  if (visible) {
    return ReactDOM.createPortal(
      <div className={["o-teleport", className].join(' ')}>{children}</div>,
      container
    )
  } else {
    return <></>
  }
}