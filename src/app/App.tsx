import classNames from 'classnames'

import { useTheme } from './providers'
import { AppRouter } from './providers/router'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { Navbar } from 'widgets/Navbar'

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  )
}

export default App
