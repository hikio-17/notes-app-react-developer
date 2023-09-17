import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import NotesApp from './components/NotesApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotesApp />
  </React.StrictMode>,
)
