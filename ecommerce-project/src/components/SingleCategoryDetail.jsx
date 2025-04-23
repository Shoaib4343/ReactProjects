import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleCategoryApi } from '../services/prorduct';
import Product from '../pages/Product';
import Banner from './Banner';
import CartHeading from './CartHeading';

const SingleCategoryDetail = () => {
    const [singleCategory, setSingleCategory] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchSingleCategory = async () => {
            try {
                const res = await getSingleCategoryApi(id);
                setSingleCategory(res.data); // Set the fetched data
            } catch (error) {
                console.log('Error:', error.message);
            }
        };

        fetchSingleCategory();
    }, [id]);

    console.log(singleCategory); // Debugging to check if the data is being fetched

    // Check if the singleCategory array is empty, show loading message
    if (singleCategory.length === 0) return <h1>Loading...</h1>;
    const categoryImage = {
        "electronics": "/images/electronics.jpg",
        "jewelery": "/images/jewelery.jpg",
        "men's clothing": "/images/men's clothing.jpg",
        "women's clothing": "/images/image.jpg",
    }
    const backgroundColor = {
        "electronics": '#f2f2f2',
        "jewelery": "#000000",
        "men's clothing": "#d9ad82",
        "women's clothing": "#eeeee2",
    }
    const categoryParagraph = {
        "electronics": "Explore the best Electronics collection.",
        "jewelery": "Discover timeless Jewelery pieces.",
        "men's clothing": "Shop the latest Men's Clothing trends.",
        "women's clothing": "Find your perfect style with Women's Clothing.",
      };
      

    return (
        <>
            <Banner
                title='Explore The Latest'
                subTitle={id.toUpperCase()}
                link='/category'
                image={categoryImage[id]}
                color={backgroundColor[id]}

            />
            {/* heading */}
            <CartHeading
                heading={id.toUpperCase()}
                paragraph={categoryParagraph[id]}

            />


            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {/* Loop through singleCategory and render each Product component */}
                {singleCategory.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default SingleCategoryDetail;
