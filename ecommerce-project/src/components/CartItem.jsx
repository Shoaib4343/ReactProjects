import React, { useContext } from 'react';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartItem = ({ cartItems }) => {
    const { handleDelCart,incrementAmount,decrementAmout} = useContext(CartContext)
  return (
    <li className="flex flex-col gap-4 p-4 rounded-2xl shadow-md bg-white hover:shadow-lg transition-all duration-300 ">
      {/* Top Section */}
      <div className="flex items-start gap-4 min-w-0">
        
        {/* Product Image */}
        <Link to={`/product/${cartItems.id}`} className="w-20 h-20 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50 border border-gray-300 shrink-0">
          <img
            src={cartItems.image}
            alt={cartItems.title}
            className="w-full h-full object-contain p-2"
          />
        </Link>

        {/* Title + Remove */}
        <div className="flex flex-1 items-start justify-between min-w-0">
          {/* Title */}
          <Link
            to={`/product/${cartItems.id}`}
            className="text-gray-800 text-sm md:text-base font-semibold hover:underline leading-5 line-clamp-2 min-w-0"
          >
            <p className="truncate">{cartItems.title}</p>
          </Link>

          {/* Remove button */}
          <button
          onClick={()=>handleDelCart(cartItems.id)}
            className="text-gray-400 hover:text-red-500 transition ml-2 shrink-0 cursor-pointer"
            aria-label="Remove item"
          >
            <IoMdClose size={22} />
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-wrap  items-center justify-between gap-4">
        
        {/* Quantity Control */}
        <div className="flex items-center justify-between gap-3 bg-gray-100 rounded-full w-28 px-3 py-1">
          <button onClick={()=>decrementAmout(cartItems.id)} className="cursor-pointer text-gray-600 hover:text-gray-800 transition w-full h-full ">
            <IoMdRemove size={20} />
          </button>
          <span className="text-gray-800 font-medium ">{cartItems.amount || 1}</span>
          <button onClick={()=>incrementAmount(cartItems.id)} className="cursor-pointer text-gray-600 hover:text-gray-800 transition w-full h-full flex justify-end">
            <IoMdAdd size={20} />
          </button>
        </div>

        {/* Single Price */}
        <div className="text-gray-700 font-medium whitespace-nowrap">
          Rs {cartItems.price.toFixed(2)}
        </div>

        {/* Total Price */}
        <div className="text-gray-900 font-bold whitespace-nowrap">
          Rs {(cartItems.price * (cartItems.amount || 1) ).toFixed(2)}
        </div>

      </div>
    </li>
  );
};

export default CartItem;
