import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './Pages/RootLayout'
import Homepage from './Pages/Homepage'

import ShopCategory from './Pages/ShopCategory'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Success from './Pages/Success'
const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {path:'/',element:<Homepage/>},
      {path:'/shopcategory/:category',element:<ShopCategory/>},
      {path: '/product/:productId' , element:<Products/>},
      {path:'/cart', element:<Cart/>},
      {path: '/checkout', element:<Checkout/>},
      {path: '/successpage', element:<Success/>}
      // {path:'/shopcategory/:id',element:<ShopCategory/>},
      // {path:'/shopcategory/:id',element:<ShopCategory/>},
      // {path:'/shopcategory/:id' , element:<ShopCategory/>}

    ]
  },
])


function App() {
  

  return (
    <>
      <div className='App'>
       <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
