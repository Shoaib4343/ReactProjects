import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const CategoryCart = () => {
    const { category } = useContext(ProductContext);

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 my-10">


            {/* Category Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto ">
                {category.map((cat, index) => (
                    <CategoryCartList key={index} cat={cat} />
                ))}
            </div>
        </div>
    );
};

export default CategoryCart;

export const CategoryCartList = ({ cat }) => {
    return (
        <Link to={`/product/category/${cat}`} className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer">
            {/* Category Name */}
            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{cat}</h3>
            </div>


        </Link>
    );
};
