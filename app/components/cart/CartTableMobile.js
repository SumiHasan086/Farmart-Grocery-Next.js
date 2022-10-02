import React from 'react'
import { MdDelete } from 'react-icons/md'
import Quantity from '../shared/Quantity'

const CartTableMobile = () => {
  return (
    <div>
        <div className="md:hidden flex gap-10 mb-5 border-b pb-5">
                <div className="w-[10%]">
                    <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Fi0.wp.com%2Fdemo4.drfuri.com%2Ffarmart2%2Fwp-content%2Fuploads%2Fsites%2F11%2F2020%2F02%2F04_4a.jpg%3Fresize%3D300%252C300%26ssl%3D1&w=384&q=75" alt="" className="w-10 h-20 object-cover rounded-md" />
                </div>
                <div className="w-[70%]">
                    <div className="flex-grow space-y-1">
                        <h1 className="text-lg font-bold text-title">Soft Mochi & Galeto Ice Cream</h1>
                        <p className="text-sm text-gray-500">Color : Black</p>
                        <p className="text-sm text-grayColor">Size : M</p>
                        <p className="text-sm text-grayColor">Price : <span className="text-orange-500 text-lg font-bold">$100</span></p>
                    </div>
                    <div className="py-2">
                        <Quantity />
                    </div>
                    <p className="text-sm text-gray-400">Total : <span className="text-green-400 font-semibold">$100</span></p>
                </div>
                <div className="mt-2 w-[10%]">
                    <MdDelete className="text-2xl cursor-pointer" />
                </div>
            </div>
    </div>
  )
}

export default CartTableMobile