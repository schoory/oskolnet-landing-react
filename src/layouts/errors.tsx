import { AlertIcon } from './../components/icons/AlertIcon';
import { OButton } from './../components/ButtonComponent/ButtonComponent';

export const ErrorsLayout = () => {
  return (
    <div className="error">
      <AlertIcon />
      <h1 className="error__title">404. Страница не найдена</h1>
      <p className="error__description">То, что вы ищете, не существует или пока не открыто.</p>
      <OButton className='error__back-btn' to='/' size='big'>Перейти на главную</OButton>
    </div>
  )
}