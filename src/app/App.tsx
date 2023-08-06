import classNames from 'classnames'

import { Navbar } from 'widgets/Navbar'
import { useTheme } from './providers'
import { AppRouter } from './providers/router'
import './styles/index.scss'
import { Sidebar } from 'widgets/Sidebar'

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
