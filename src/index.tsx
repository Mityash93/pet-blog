import React from 'react'
import { createRoot } from 'react-dom/client'
import { Counter } from './component/Counter'
const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
)
