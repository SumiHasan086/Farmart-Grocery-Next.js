import React from 'react'

const Quantity = ({quantity,decreaseQuantity,increaseQuantity}) => {
    return (
            <div className="flex border h-10">
                <button onClick={decreaseQuantity} className="w-10 bg-[#f5f5f5] flex items-center justify-center ">-</button>
                <div className="px-5 flex-grow flex items-center justify-center">{quantity || 1}</div>
                <button onClick={increaseQuantity} className="w-10 bg-[#f5f5f5] flex items-center justify-center ">+</button>
            </div>
    )
}

export default Quantity