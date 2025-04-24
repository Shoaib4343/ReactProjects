import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const ProductDetailCart = () => {
  const {cart} = useContext(CartContext)
  const { product } = useContext(ProductContext);
  const {handleCart} = useContext(CartContext)
  const navigate = useNavigate()
  const { id } = useParams();
  const detailProduct = product.find((curElm) => curElm.id === parseInt(id));

  if (!detailProduct) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      {/* Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={detailProduct.image}
          alt={detailProduct.title}
          className="w-[300px] h-[400px] object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{detailProduct.title}</h1>
        <p className="text-gray-500">{detailProduct.category}</p>
        <p className="text-xl font-semibold text-green-600">Rs {detailProduct.price}</p>
        <p className="text-sm text-gray-700">{detailProduct.description}</p>

        <div className="flex gap-4 mt-4">
          <button onClick={()=>handleCart(detailProduct)} className="cursor-pointer bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Add to Cart
          </button>
          <button
            onClick={() => navigate('/checkout')} // <-- navigate to checkout
            className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"

            disabled={cart.length == 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCart;
