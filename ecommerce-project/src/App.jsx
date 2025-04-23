import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Product from './pages/Product'
import Categories from './pages/Categories'
import Contact from './pages/Contact'
import Layout from './layout/Layout'
import ProductDetailCart from './components/ProductDetailCart'
import SingleCategoryDetail from './components/SingleCategoryDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import CheckoutSection from './pages/CheckoutSection'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement : <Error />,
      children:[
        {
          path: "/",
          element : <Home />
        },
        {
          path: "/product",
          element : <Product />
        },
        {
          path: "/product/:id",
          element : <ProductDetailCart />
        },
        {
          path: "/about",
          element : <About />
        },
        {
          path: "/contact",
          element : <Contact/>
        },
        {
          path: "/category",
          element : <Categories />
        },
        {
          path: "/category",
          element : <Categories />
        },
        {
          path: "/product/category/:id",
          element : <SingleCategoryDetail />
        },
        {
          path: "/login",
          element : <Login />
        },
        {
          path: "/register",
          element : <Register />
        },
        {
          path: '/checkout',
          element: <CheckoutSection />
        }
        
        
      ]

    }
  ])
  return (
   <RouterProvider router={router} />
  )
}

export default App