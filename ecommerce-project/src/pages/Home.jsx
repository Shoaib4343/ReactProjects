import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import Product from './Product'
import HeroSection from '../layout/HeroSection'
import CartHeading from '../components/CartHeading'
import CategoryCart from '../components/CategoryCart'

const Home = () => {
  const { product } = useContext(ProductContext)
  const categoryFilter = product.filter((curElm) => curElm.category === "men's clothing" || curElm.category === "women's clothing")
 
  return (
    <div className='container mx-auto'>
      <HeroSection />

      {/* category */}
      <CategoryCart />


      {/* Heading */}
      <CartHeading heading="Latest Collections" paragraph=" Explore our stylish men's and women's clothing" />
      {/* product View */}
      <ul className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 '>
        {
          categoryFilter.map((curElm) => {
            return (
              <Product key={curElm.id} product={curElm} />
            )
          })
        }
      </ul>
    </div>
  )
}

export default Home