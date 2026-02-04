import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.scss'
import { ConfigProvider, theme } from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#64ffda',
          colorBgBase: '#0a192f',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
