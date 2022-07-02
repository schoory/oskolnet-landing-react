import { MouseEvent, useState } from "react"
import { OBreadcrumbs } from "../../components/BreadcrumbsComponent/BreadcrumbsComponent"
import { OSection } from "../../components/SectionComponent/SectionComponent"

import './PaymentPage.scss'

export const PaymentPage = () => {

  const changeAccordionItemHeight = (event: MouseEvent)  => {
    const accordionItem = event.currentTarget.parentElement
    if ((accordionItem as HTMLButtonElement).hasAttribute('data-wrap')) {
      (accordionItem as HTMLButtonElement).removeAttribute('data-wrap')
    } else {
      (accordionItem as HTMLButtonElement).setAttribute('data-wrap', 'true')
    }
  }

  return (
    <div className="payment-page">
      <OBreadcrumbs breadcrumbs={[
        { name: 'Главная', to: "/" },
        { name: 'Оплатить', to: "/payment" },
      ]}/>
      <OSection title="Оплатить">
        <div className="payment-page__accordion">
          <div className="container accordion-item" data-wrap>
            <button className="accordion-item__header" onClick={changeAccordionItemHeight}>
              <h3 className="accordion-item__title">Оплата картой</h3>
              <div className="accordion-item__wrap-btn">
                <span /><span />
              </div>
            </button>
            <div className="accordion-item__content">
              <p className="accordion-item__address">
                Оплата услуг осуществляется через кассу в офисе компании «Осколнэт» по адресу: <br />
                <b>мкр. Королева 28, оф. 3</b>
              </p>
              <p className="accordion-item__schedule"><b>График работы:</b> ежедневно с 09.00 до 20.00 без перерывов и выходных.</p>
            </div>
          </div>
          <div className="container accordion-item" data-wrap>
            <button className="accordion-item__header" onClick={changeAccordionItemHeight}>
              <h3 className="accordion-item__title">В личном кабинете</h3>
              <div className="accordion-item__wrap-btn">
                <span /><span />
              </div>
            </button>
            <div className="accordion-item__content">
              <p className="accordion-item__address">
                Оплата услуг осуществляется через кассу в офисе компании «Осколнэт» по адресу: <br />
                <b>мкр. Королева 28, оф. 3</b>
              </p>
              <p className="accordion-item__schedule"><b>График работы:</b> ежедневно с 09.00 до 20.00 без перерывов и выходных.</p>
            </div>
          </div>
          <div className="container accordion-item" data-wrap>
            <button className="accordion-item__header" onClick={changeAccordionItemHeight}>
              <h3 className="accordion-item__title">Сбербанк онлайн</h3>
              <div className="accordion-item__wrap-btn">
                <span /><span />
              </div>
            </button>
            <div className="accordion-item__content">
              <p className="accordion-item__address">
                Оплата услуг осуществляется через кассу в офисе компании «Осколнэт» по адресу: <br />
                <b>мкр. Королева 28, оф. 3</b>
              </p>
              <p className="accordion-item__schedule"><b>График работы:</b> ежедневно с 09.00 до 20.00 без перерывов и выходных.</p>
            </div>
          </div>
          <div className="container accordion-item" data-wrap>
            <button className="accordion-item__header" onClick={changeAccordionItemHeight}>
              <h3 className="accordion-item__title">Телебанк «ВТБ24»</h3>
              <div className="accordion-item__wrap-btn">
                <span /><span />
              </div>
            </button>
            <div className="accordion-item__content">
              <p className="accordion-item__address">
                Оплата услуг осуществляется через кассу в офисе компании «Осколнэт» по адресу: <br />
                <b>мкр. Королева 28, оф. 3</b>
              </p>
              <p className="accordion-item__schedule"><b>График работы:</b> ежедневно с 09.00 до 20.00 без перерывов и выходных.</p>
            </div>
          </div>
          <div className="container accordion-item" data-wrap>
            <button className="accordion-item__header" onClick={changeAccordionItemHeight}>
              <h3 className="accordion-item__title">Касса (мкр. Королева, 28)</h3>
              <div className="accordion-item__wrap-btn">
                <span /><span />
              </div>
            </button>
            <div className="accordion-item__content">
              <p className="accordion-item__address">
                Оплата услуг осуществляется через кассу в офисе компании «Осколнэт» по адресу: <br />
                <b>мкр. Королева 28, оф. 3</b>
              </p>
              <p className="accordion-item__schedule"><b>График работы:</b> ежедневно с 09.00 до 20.00 без перерывов и выходных.</p>
            </div>
          </div>
          <div className="container accordion-item" data-wrap>
            <button className="accordion-item__header" onClick={changeAccordionItemHeight}>
              <h3 className="accordion-item__title">Банкоматы «ВТБ24»</h3>
              <div className="accordion-item__wrap-btn">
                <span /><span />
              </div>
            </button>
            <div className="accordion-item__content">
              <p className="accordion-item__address">
                Оплата услуг осуществляется через кассу в офисе компании «Осколнэт» по адресу: <br />
                <b>мкр. Королева 28, оф. 3</b>
              </p>
              <p className="accordion-item__schedule"><b>График работы:</b> ежедневно с 09.00 до 20.00 без перерывов и выходных.</p>
            </div>
          </div>
          <div className="container accordion-item" data-wrap>
            <button className="accordion-item__header" onClick={changeAccordionItemHeight}>
              <h3 className="accordion-item__title">Банкоматы «Сбербанк»</h3>
              <div className="accordion-item__wrap-btn">
                <span /><span />
              </div>
            </button>
            <div className="accordion-item__content">
              <p className="accordion-item__address">
                Оплата услуг осуществляется через кассу в офисе компании «Осколнэт» по адресу: <br />
                <b>мкр. Королева 28, оф. 3</b>
              </p>
              <p className="accordion-item__schedule"><b>График работы:</b> ежедневно с 09.00 до 20.00 без перерывов и выходных.</p>
            </div>
          </div>
          <div className="container accordion-item" data-wrap>
            <button className="accordion-item__header" onClick={changeAccordionItemHeight}>
              <h3 className="accordion-item__title">Банкоматы «Липецккомбанк»</h3>
              <div className="accordion-item__wrap-btn">
                <span /><span />
              </div>
            </button>
            <div className="accordion-item__content">
              <p className="accordion-item__address">
                Оплата услуг осуществляется через кассу в офисе компании «Осколнэт» по адресу: <br />
                <b>мкр. Королева 28, оф. 3</b>
              </p>
              <p className="accordion-item__schedule"><b>График работы:</b> ежедневно с 09.00 до 20.00 без перерывов и выходных.</p>
            </div>
          </div>
        </div>
      </OSection>
    </div>
  )
}