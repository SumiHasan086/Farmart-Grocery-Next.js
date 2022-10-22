import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { FaCartPlus } from 'react-icons/fa'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import {addItem,removeItem, selectItems } from '../../redux/slices/basketSlice'


const exists = false

const ProductCard = ({ product }) => {
  
  const {id, name, image, price, weight, oldPrice } = product
  const cartItems = useSelector(selectItems)
  const dispatch= useDispatch()


  const OffCalc = () => {
    const off = ((oldPrice - price) / oldPrice) * 100
    return Math.round(off)
  }


  const checkItemExists = (id) => {
    const find=cartItems.filter((item) => item.id ===id)
    return !! find.length
  }


  const addToBasket = (product) => {
    dispatch(addItem({
      ...product,
      quantity:1
    }))
  }

  const removeItemFromCart = () => {
    dispatch(removeItem(id))
  }




  return (
    <Link href={`/products`}>
      <div className="product-card bg-white">
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
          <div className="flex items-center justify-between">
            <div className="">
              <span className="text-sm text-grayColor"> {weight}</span>
              <div className="flex items-center gap-1">
                <span className={`text-base font-bold ${oldPrice ? 'text-orange-500' : 'text-[rgb(204,248,8)]'} `}>${price}</span>
                {oldPrice && (
                  <span className="text-sm text-gray-400 line-through">${oldPrice}</span>
                )}
              </div>
            </div>
            {checkItemExists(id) ? (
                 <button onClick={(e)=>{
                  e.stopPropagation();
                  e.preventDefault();
                  removeItemFromCart(product);
                 }}
                 className='bg-primary text-white flex justify-center items-center rounded-full w-10 h-10'>
                 <BsFillCartCheckFill size={16} />
               </button>
              ):(
                <button onClick={(e)=>{
                  e.stopPropagation();
                  e.preventDefault();
                  addToBasket(product)
                 }}
                 className='bg-[#eb6445] text-white flex justify-center items-center rounded-full w-10 h-10'>
                 <FaCartPlus size={16} />
               </button>
              )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard