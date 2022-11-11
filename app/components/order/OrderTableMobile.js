import Link from 'next/link'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from '../../redux/slices/basketSlice'
import { timeAgo } from '../../utils/helper'
import Quantity from '../shared/Quantity'

const OrderTableMobile = ({ name, order_id, items, total, payment_success, created_at }) => {

    return (
        <div>
            <div className="md:hidden mb-5 border-b pb-5">
            <h3 className="truncate cursor-pointer w-4/5 mb-3"><span className="font-bold">Order Id</span>:{order_id}</h3>
            <p className="text-sm text-grayColor">
                  Ordered : {timeAgo(created_at)} ago
                </p>
                {items.map((item, i) => (
                    <Link key={i} href={`/products/${item.id}`}>
                        <h1 className="text-base font-bold cursor-pointer hover:text-primary text-title">
                            {item?.name}
                            <span className="text-sm text-gray-500">(×{item?.quantity})</span>
                        </h1>
                    </Link>
                ))}
                <p className="text-sm text-gray-500 mt-3">Payment:  {payment_success ? 'success' : 'failed'}</p>
                <p className="text-sm text-grayColor">Status : <span className="text-orange-500 text-md font-semibold">Pending</span></p>
                <p className="text-sm text-gray-400 font-bold mt-2">Total : <span className="text-green-700 font-bold text-lg">${total}</span></p>
            </div>


        </div>
    )
}

export default OrderTableMobile