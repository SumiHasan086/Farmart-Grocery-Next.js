import React from 'react'
import Quantity from '../shared/Quantity'
import { MdDelete } from 'react-icons/md'

const CartTableRow = () => {
    return (
        <>
            <tr className="border-b md:border-r md:border-l table_row">
                <td className="py-5 pl-3">
                    <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Fi0.wp.com%2Fdemo4.drfuri.com%2Ffarmart2%2Fwp-content%2Fuploads%2Fsites%2F11%2F2020%2F02%2F04_4a.jpg%3Fresize%3D300%252C300%26ssl%3D1&w=384&q=75" alt="" className="w-10 h-20 object-cover rounded-md" />
                </td>
                <td className="py-5 max-w-[250px]">
                    <div className="">
                        <h1 className="text-lg font-bold text-title">Farmart - Your Online Foods</h1>
                        <p className="text-sm text-gray-500">Color : Black</p>
                        <p className="text-sm text-grayColor">Size : M</p>
                    </div>
                </td>
                <td className="py-5">$100</td>
                <td className="py-5">
                    <div className="w-fit">
                        <Quantity />
                    </div>
                </td>
                <td className="py-5">$100</td>
                <td className="py-5">
                    <MdDelete className="text-2xl cursor-pointer" />
                </td>
            </tr>
        </>
    )
}

export default CartTableRow