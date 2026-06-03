import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // импорт роутера
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>          {/* оборачиваем приложение в роутер */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)