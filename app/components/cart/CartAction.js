import Button from '../shared/Button';
import React from 'react'
import Link from 'next/link';

const CartAction = () => {
    return (
        <div className="py-8 border-t">
            <div className="flex justify-between gap-10 md:gap-5 flex-wrap">
                <div className="md:w-[40%] w-full">
                    <h2 className="text-xl mb-3 font-bold">Using A Promo Code?</h2>
                    <div className="flex items-center">
                        <div className="flex items-center border rounded p-4">
                            <input
                                type="text"
                                placeholder="Coupon code"
                                className="outline-none bg-transparent px-4 flex-1"
                            />
                        </div>
                        <Button
                            title="Apply"
                            className="self-stretch"
                        />
                    </div>
                </div>
                <div className="bg-gray-100 p-5 rounded-md md:w-[30%] w-full">
                    <div className="flex justify-between pb-5 border-b">
                        <h2 className="text-xl font-bold">Subtotal</h2>
                        <h2 className="text-xl font-bold">$0.00</h2>
                    </div>
                    <div className="pb-5 border-b space-y-3">
                        <span className="">Shipping</span>
                        <ul>
                            <li>-Flat rate</li>
                        </ul>
                        <p>Shipping to <strong>BD</strong>.</p>
                    </div>
                    <div className="flex justify-between py-5">
                        <h2 className="text-xl font-bold">Subtotal</h2>
                        <h2 className="text-xl font-bold text-green">$200.00</h2>
                    </div>
                    <Link href="/checkout">
                       <Button 
                          title="Checkout"
                          className="w-full py-3"
                       />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartAction