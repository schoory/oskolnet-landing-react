import { Routes, Route, Router, Navigate } from "react-router-dom"
import { DefaultLayout } from "../layouts/default"
import { ErrorsLayout } from "../layouts/errors"
import { TariffsPage } from "../pages/TariffsPage/TariffsPage";
import { HomePage } from './../pages/HomePage/HomePage';
import { DocsPage } from './../pages/DocsPage/DocsPage';
import { MapPage } from "../pages/MapPage/MapPage";
import { PaymentPage } from "../pages/PaymentPage/PaymentPage";
import { NewsPage } from "../pages/NewsPage/NewsPage";
import { PostPage } from "../pages/PostPage/PostPage";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { SpeedtestPage } from "../pages/SpeedtestPage/SpeedtestPage";
import { CoveragePage } from "../pages/CoveragePage/CoveragePage";

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout><HomePage /></DefaultLayout>} />
      <Route path="/tariffs" element={<Navigate to='/tariffs/for-home' />} />
      <Route path="/tariffs/:type" element={<DefaultLayout><TariffsPage /></DefaultLayout>} />
      <Route path="/docs" element={<DefaultLayout><DocsPage /></DefaultLayout>} />
      <Route path="/contacts" element={<DefaultLayout><MapPage /></DefaultLayout>} />
      <Route path="/payment" element={<DefaultLayout><PaymentPage /></DefaultLayout>} />
      <Route path="/news" element={<DefaultLayout><NewsPage /></DefaultLayout>} />
      <Route path="/news/:id" element={<DefaultLayout><PostPage /></DefaultLayout>} />
      <Route path="/about" element={<DefaultLayout><AboutPage /></DefaultLayout>} />
      <Route path="/speedtest" element={<DefaultLayout><SpeedtestPage /></DefaultLayout>} />
      <Route path="/coverage" element={<DefaultLayout><CoveragePage /></DefaultLayout>} />
      <Route path="*" element={<ErrorsLayout />} />
    </Routes>
  )
}