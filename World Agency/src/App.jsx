import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Country from './pages/Country'
import ErrorPage from './pages/ErrorPage'
import AppLayout from './layout/AppLayout'
import CountryDetailPage from './pages/CountryDetailPage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path:'/',
          element:<Home />,
        },
        {
          path:'/home',
          element:<Home />,
        },
        {
          path:'/about',
          element:<About />,
        },
        {
          path:'/contact',
          element:<Contact />,
        },
        {
          path:'/countries',
          element:<Country />,
        },
        {
          path:'/countries/name/:id',
          element:<CountryDetailPage />,
        },
      ]

    }
  ])
  return (
    <div className='bg-gray-950 text-white'>
    <RouterProvider router={router} />
    </div>
  )
}

export default App