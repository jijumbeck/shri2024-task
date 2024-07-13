import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header.jsx'
import { Main } from './components/Main.jsx'
import './reset.css';
import './styles.css';


ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <>
      <Header />
      <Main />
    </>
  </React.StrictMode>,
)
