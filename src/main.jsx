import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css';
import './styles.css';
import { Header } from './components/Header';
import { Main } from './components/Main';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Header />
      <Main />
    </>
  </React.StrictMode>,
)
