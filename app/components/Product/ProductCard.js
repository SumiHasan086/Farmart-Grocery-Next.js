import React from 'react'
import Image from "next/image"

const ProductCard = ({ product }) => {
  const { name,image,price,weight ,oldPrice } = product
  const OffCalc = () => {
    const off = ((oldPrice - price) / oldPrice ) * 100
    return Math.round(off)
  }


  return (
    <div className="product-card">
      {oldPrice && (
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md absolute top-5 left-5 z-10">{OffCalc()} %OFF</span>
      )}
    
      {/* Image */}
      <Image
        src={image}
        width={265}
        height={270}
        objectFit="contain"
      />
      {/* Product details */}
      <div className="flex flex-col gap-1 mt-2 w-full">
        <h4 className="text-sm font-bold text-grayColor">Farmart</h4>
        <h3 className="text-lg font-bold text-title text-blue-700 hover:text-primary transition-all duration-500 truncate">{name}</h3>
        <span className="text-sm text-grayColor"> {weight}</span>
        <div className="flex items-center gap-1">
          <span className={`text-base font-bold ${oldPrice ? 'text-orange-500' : 'text-[rgb(204,248,8)]'} `}>${price}</span>
         {oldPrice && (
           <span className="text-sm text-gray-400 line-through">${oldPrice}</span>
         )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard