import { createContext, useEffect, useState } from "react";
import { getProductApi, getProductCategoryApi } from "../services/prorduct";


// 1. Create Context 
export const ProductContext = createContext();

// 2.  Context Porvider
export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([])
    const [category, setcategory] = useState([])
    
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getProductApi();
                setProduct(res.data)

            } catch (error) {
                console.log('error : ', error.message)
            }

        }
        fetchProduct();
    }, [])

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await getProductCategoryApi();
                setcategory(res.data)

            } catch (error) {
                console.log('error:', error)
            }
        }
        fetchCategory();
    }, [])



    return <ProductContext.Provider
        value={{
            product,
            category,
        }}>
        {children}
    </ProductContext.Provider>
}
