import { FC, ReactNode } from "react"
import { Header } from '../components/HeaderComponent/HeaderComponent';
import { Footer } from './../components/FooterComponent/FooterComponent';

type DefaultLayoutProps = {
  children?: ReactNode
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      { children }
      <Footer />
    </div>
  )
}