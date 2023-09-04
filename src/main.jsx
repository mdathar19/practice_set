import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalWiidget from './global/context/GlobalProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalWiidget><App /></GlobalWiidget>,
)
