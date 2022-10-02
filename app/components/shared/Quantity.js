import React from 'react'

const Quantity = () => {
    return (
            <div className="flex border h-10">
                <button className="w-10 bg-[#f5f5f5] flex items-center justify-center ">-</button>
                <div className="px-5 flex-grow flex items-center justify-center">1</div>
                <button className="w-10 bg-[#f5f5f5] flex items-center justify-center ">+</button>
            </div>
    )
}

export default Quantity