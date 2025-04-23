import React, { useContext } from 'react'
// import side bar context
import { SideBarContext } from '../context/SideBarContext'
import { IoMdArrowForward, IoMdTrash } from 'react-icons/io'
import { CartContext } from '../context/CartContext'
import CartItem from '../components/CartItem'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  const navigate = useNavigate()
  // sidebar context 
  const { isOpen, handleIsOpen } = useContext(SideBarContext)
  // Cart context
  const { cart, delAllCart, itemAmount, total } = useContext(CartContext)
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'}  z-50 w-full md:w-[35vw] xl:max-w-[30vw] h-screen fixed top-0  bg-white shadow-2xl transition-all duration-300  `}>
      <div className='flex justify-between items-center border-b border-b-gray-400 p-4'>
        <div className='text-sm uppercase font-semibold'>
          Shopping Bag ({itemAmount})
        </div>

        <div onClick={handleIsOpen} className='cursor-pointer'>
          <IoMdArrowForward size={20} />
        </div>
      </div>

      <ul className='flex flex-col  h-[60vh] p-4 gap-10 my-4 overflow-y-auto '>
        {
          cart.map((curElm) => (
            <CartItem key={curElm.id} cartItems={curElm} />
          ))
        }
      </ul>


     
      <div className="border-t border-gray-300 mt-4 p-4 flex flex-col gap-4 h-[20vh]">
        {/* Total Price and Clear Cart */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="uppercase font-semibold text-sm text-gray-700">Total:</span>
            <span className="font-bold text-lg text-gray-900">Rs {total.toFixed(2)}</span>
          </div>
          <div onClick={delAllCart} className="cursor-pointer flex items-center gap-2 text-red-500 hover:text-red-600">
            <IoMdTrash size={20} /> {/* Trash Icon */}
            <span className="text-sm font-semibold">Clear Cart</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          
          {/* Checkout Button */}
          <button  onClick={()=>{
            navigate('/checkout')
            handleIsOpen()
          }}  className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold transition cursor-pointer">
            Checkout
          </button>
        </div>
      </div>

    </div>


  )
}

export default SideBar