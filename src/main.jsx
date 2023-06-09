import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { ThemeProvider } from '@mui/material'
import router from '../src/router/router'
import { lightTheme } from './themes/light'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
