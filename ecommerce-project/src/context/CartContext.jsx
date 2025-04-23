
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0)
    const [total, setTotal] = useState(0)

    // total price
    useEffect(()=>{
        const newTotal = cart.reduce((acc,cur)=>{
            return   acc + (parseFloat(cur.price)*parseFloat(cur.amount))
        },0)
        setTotal(newTotal)
    },[cart])

    // Item Amount
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((acc, cur) => {
                return acc + cur.amount
            },0)

            setItemAmount(amount)
        }
    }, [cart])

    // add prodcut with amount
    const handleCart = (product) => {
        const newItem = { ...product, amount: 1 };
        const checkItem = cart.find((item) => item.id === product.id);
        if (checkItem) {
            const updatedCart = cart.map((item) => item.id === product.id ? { ...item, amount: item.amount + 1 } : item)
            setCart(updatedCart)
        } else {
            setCart([...cart, newItem])
        }

    }

    // Delete product from the cart 
    const handleDelCart = (id) => {
        const updateCart = cart.filter((curElm) => curElm.id !== id)
        setCart(updateCart)
    }

    // del all
    const delAllCart = () => {
        setCart([])
    }

    // increment
    const incrementAmount = (id) => {
        const incCart = cart.find((curElm) => curElm.id === id)
        handleCart(incCart)
    }

    // decrement 
    const decrementAmout = (id) => {
        const decrement = cart.find((curElm) => curElm.id === id)
        if (decrement) {
            if (decrement.amount > 1) {
                const updatedCart = cart.map((curElm) => curElm.id === id ? { ...curElm, amount: curElm.amount - 1 } : curElm)
                setCart(updatedCart)
            } else {
                const delItem = cart.filter((curElm) => curElm.id !== id)
                setCart(delItem)
            }
        }
    };



    return (
        <CartContext.Provider value={{
            cart,
            handleCart,
            handleDelCart,
            delAllCart,
            incrementAmount,
            decrementAmout,
            itemAmount,
            total
        }}>
            {children}
        </CartContext.Provider>
    );
}
