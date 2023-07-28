import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { AppRouter } from './providers/router'
import './styles/index.scss'
import { useTheme } from './providers'

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
    </div>
  )
}

export default App
