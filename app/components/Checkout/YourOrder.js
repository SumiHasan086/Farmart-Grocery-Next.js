import React from 'react'
import Button from '../shared/Button';

const YourOrder = () => {
    return (
        <div>
            <h3 className="text-2xl mb-4">Your Order</h3>
            <div className="bg-gray-100 p-5 rounded-md">
                <div className="flex justify-between pb-5 border-b">
                    <h2 className="text-base font-bold">Product</h2>
                    <h2 className="text-base font-bold">TOTAL</h2>
                </div>
                <div className="space-y-3 bg-white rounded-md">
                    <div className="flex justify-between py-5 px-5 border-b">
                        <h2 className="text-base font-medium">Soft Mochi & Galeto Ice Cream <span className="text-gray-400">(×2)</span></h2>
                        <h2 className="text-base font-bold ml-2">$41.39</h2>
                    </div>
                    <div className="flex justify-between py-5 px-5 border-b">
                        <h2 className="text-base font-medium">Soft Mochi & Galeto Ice Cream <span className="text-gray-400">(×1)</span></h2>
                        <h2 className="text-base font-bold ml-2">$20.78</h2>
                    </div>
                    <div className="flex justify-between py-5 px-5 border-b">
                        <h2 className="text-base font-medium">Soft Mochi & Galeto Ice Cream <span className="text-gray-400">(×3)</span></h2>
                        <h2 className="text-base font-bold ml-2">$64.49</h2>
                    </div>
                </div>
                <div className="flex justify-between py-5 border-b">
                    <h2 className="text-xl font-bold">Subtotal</h2>
                    <h2 className="text-xl font-bold text-green-500">$130.00</h2>
                </div>
                <div className="pb-5 border-b space-y-3">
                    <span className="">Shipping</span>
                    <ul>
                        <li>-Flat rate</li>
                    </ul>
                    <p>Shipping to <strong>BD</strong>.</p>
                </div>
                <div className="flex justify-between py-5 border-b">
                    <h2 className="text-xl font-bold">Total</h2>
                    <h2 className="text-xl font-bold text-green-500">$130.00</h2>
                </div>
                <div className="pt-5 border-b">
                    <h2 className="text-lg font-bold">Payment Method</h2>
                    <p className="text-gray-500 mt-3"> - Pay with a Debit/Credit Card</p>
                </div>
            </div>
            <Button 
            title="Place Order"
            className="w-full py-3 mt-5"
            />
        </div>
    )
}

export default YourOrder