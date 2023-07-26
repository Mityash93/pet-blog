import { Link, Route, Routes } from 'react-router-dom'
import './index.scss'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.asyncLazy'
import { MainPageAsync } from './pages/MainPage/MainPageAsync'
import { Suspense } from 'react'

const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
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
