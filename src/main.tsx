import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import Home from './routes/Home/index.tsx'
import Login from './routes/Login/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'
import BotPage from './routes/BotPage/index.tsx'
import Error from './routes/Error/index.tsx' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[{
      path:'/',
      element:<Home/>
    },{
      path:'/login',
      element:<Login/>
    },{
      path:'/cadastro',
      element:<Cadastro/>
    },{
      path:'/botpage',
      element:<BotPage/>
    }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
