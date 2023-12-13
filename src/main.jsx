import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextFile from './context/ContextFile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextFile>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ContextFile>
)
