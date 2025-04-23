import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import Product from './Product';
import Filter from '../components/FilterItem';

const Categories = () => {
  const { product, category } = useContext(ProductContext)
  const [selectCategory, setSelectCategory] = useState([])
  const [selectPrice, setSelectPrice] = useState([])

  return (
    <div className="container mx-auto p-4">
      {/* Heading Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Category - <span>{selectCategory.length > 0 ? selectCategory.join(", ") : 'All'}</span></h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar: Filters */}
        <div className="w-full lg:w-1/5  ">
          <div className=' bg-gray-100 p-4 rounded-lg shadow-md '>
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            <div className="flex lg:flex-col gap-x-4">
              {/* Category Filter */}
            <Filter
              heading='Category'
              item={category}
              setSelectCategory={setSelectCategory}
            />

            {/* Price Filter */}
            <Filter
              heading='Price'
              item={['$0 - $50', '$50 - $150', '$150+']}
              setSelectCategory={setSelectPrice}
            />
            </div>
          </div>
        </div>

        {/* Right Side: Product List */}
        <div className="w-full lg:w-4/5">
          <ul className="space-y-6">
            {/* Example of a Category item */}

            <ul className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 '>
              {
                product.filter((curElm) => {
                  const matchCategory = selectCategory.length === 0 ? true : selectCategory.includes(curElm.category);
                  let matchPrice = true;

                  if (selectPrice.length > 0) {
                    matchPrice = selectPrice.some((priceRange) => {
                      if (priceRange === '$0 - $50') {
                        return curElm.price >= 0 && curElm.price <= 50
                      }
                      if (priceRange === '$50 - $150') {
                        return curElm.price >= 50 && curElm.price <= 150
                      }
                      if (priceRange === '$150+') {
                        return curElm.price > 150;
                      }
                      return false
                    })
                  }

                  return matchCategory && matchPrice
                })
                  .map((curElm) => {
                    return (
                      <Product key={curElm.id} product={curElm} />
                    )
                  })
              }
            </ul>


            {/* Repeat similar <li> for other categories */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
