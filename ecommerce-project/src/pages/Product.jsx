import React, { useContext } from 'react'
import { FaPlus } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Product = ({ product }) => {
  const {handleCart} = useContext(CartContext)
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <li className='w-full  p-4 rounded-lg shadow-xl  flex flex-col gap-4 group relative bg-white'>
      <div className='flex justify-center items-center '>
        <img src={product?.image} alt={product.title} className='w-52 h-52 group-hover:scale-110 overflow-hidden transition-all duration-300 ease-in-out' />
      </div>
      <p className='text-sm font-bold truncate text-gray-500'>{product.category}</p>
      <Link to={`/product/${product.id}`} className='text-2xl font-bold truncate'>{product.title}</Link>
      <p className='text-sm line-clamp-3 text-gray-600 font-semibold'>{product.description}</p>
      <p className='text-gray-600'><span className='font-semibold text-gray-900'>Rs</span> {product.price}  </p>
      <p className='text-gray-600'><span className='font-semibold text-gray-900'>Rating</span> {product.rating.rate}</p>

      <div className='p-2 absolute top-2 right-2 opacity-0 group-hover:opacity-100 flex flex-col gap-3 justify-center items-center transition-all duration-300 ease-in-out'>
        <button onClick={()=>handleCart(product)}  className='cursor-pointer bg-red-600 hover:bg-red-700 p-3 rounded-full shadow-md text-white transition-all duration-300 font-normal'>
          <FaPlus size={18} />
        </button>
        <Link to={`/product/${product.id}`}>
          <button className='cursor-pointer bg-white hover:bg-gray-200 p-3 rounded-full shadow-md text-gray-700 transition-all duration-300'>
            <IoEyeSharp size={18} />
          </button>
        </Link >
      </div>



    </li>
  )
}

export default Product