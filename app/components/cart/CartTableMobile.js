import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from '../../redux/slices/basketSlice'
import Quantity from '../shared/Quantity'

const CartTableMobile = ({ id, name, image, price, weight, quantity }) => {
    const dispatch = useDispatch()

    const increaseQuantity = () => {
        dispatch(increaseItemQuantity(id))
    }

    const decreaseQuantity = () => {
        dispatch(decreaseItemQuantity(id))
    }
  return (
    <div>
        <div className="md:hidden flex gap-10 mb-5 border-b pb-5">
                <div className="w-[10%]">
                    <img src={image}/>
                </div>
                <div className="w-[70%]">
                    <div className="flex-grow space-y-1">
                        <h1 className="text-lg font-bold text-title">{name}</h1>
                        <p className="text-sm text-gray-500">Weight: {weight}</p>
                        <p className="text-sm text-grayColor">Price : <span className="text-orange-500 text-lg font-bold">${price}</span></p>
                    </div>
                    <div className="py-2">
                    <Quantity
                            quantity={quantity}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                        />
                    </div>
                    <p className="text-sm text-gray-400">Total : <span className="text-green-400 font-semibold">${(quantity * price).toFixed(2)}</span></p>
                </div>
                <div className="mt-2 w-[10%]">
                    <MdDelete onClick={() => dispatch(removeItem(id))} className="text-2xl cursor-pointer" />
                </div>
            </div>
    </div>
  )
}

export default CartTableMobile