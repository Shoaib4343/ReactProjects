import React from 'react'

const CartHeading = ({heading,paragraph}) => {
    return (
        <>
            {/* Product Section Heading */}
            <div className="text-center my-12">
                <h2 className="text-4xl font-bold uppercase tracking-wide">{heading}</h2>
                <p className="text-gray-600 mt-2">{paragraph}</p>
            </div>
        </>
    )
}

export default CartHeading