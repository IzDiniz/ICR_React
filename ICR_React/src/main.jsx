import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home/index.jsx'
import Exames from './components/Exames/index.jsx'
import RaioX from './components/RaioX/index.jsx'
import ExameSangue from './components/ExameSangue/index.jsx'
import Ressonancia from './components/Ressonancia/index.jsx'
import AssistenteClara from './components/AssistenteClara/index.jsx'
import Doacoes from './components/Doacoes/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {index: true, element: <Home/>},
      {path: 'Exames', element: <Exames />},
      {path: 'AssistenteClara', element: <AssistenteClara />},
      {path: 'RaioX', element: <RaioX />},
      {path: 'Doacoes', element: <Doacoes />},
      {path: 'ExameSangue', element: <ExameSangue />},
      {path: 'Ressonancia', element: <Ressonancia/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
