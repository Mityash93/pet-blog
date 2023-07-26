import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.asyncLazy'
import { MainPageAsync } from './pages/MainPage/MainPageAsync'
import { Suspense, useState } from 'react'
import { useTheme } from './theme/useTheme'
import classNames from 'classnames'

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className={classNames('app', {
        [theme]: true,
      })}
    >
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
