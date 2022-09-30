import React from 'react'
import FooterCard from '../shared/FooterCard'
import Quantity from '../shared/Quantity'

const ProductDetails = ({ price = 25, oldPrice = 30.25 }) => {
    return (
        <div className="py-10 bg-[#f5f5f5]">
            <div className="container">
                <div className=" p-10 bg-white rounded-2xl ">
                    <div className="flex flex-wrap lg:flex-row flex-col lg:gap-0 gap-7">
                        <div className="lg:w-2/5 w-full lg:border-r">
                            <img src="https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2020/02/05_11a.jpg?fit=800%2C800&ssl=1" />
                        </div>
                        <div className="lg:w-2/5 w-full lg:px-10 pl-0">
                            <div className="text-grayColor mb-5">
                                <a href="/">Home</a>
                                <span className="mx-2">/</span>
                                <a href="/">Shop</a>
                                <span className="mx-2">/</span>
                                <a href="/">Fruits</a>
                                <span className="mx-2">/</span>
                                <span className="text-title">Bar S - Classic Bun Length Franks</span>
                            </div>
                            <h4 className="md:text-3xl text-base  font-bold mb-2 text-primary ">MartFury</h4>
                            <h1 className="text-title md:text-3xl text-xl font-semibold mb-5">Bar S - Classic Bun Length Franks</h1>
                            <span className="text-grayColor text-xs">⭐⭐⭐⭐⭐(1 customer review )</span>

                            <div className="my-3">
                                <span className="text-sm text-grayColor mb-2 block"> 500g</span>
                                <div className="flex items-center gap-1">
                                    <span className={`text-xl font-bold ${oldPrice ? 'text-orange-500' : 'text-[rgb(204,248,8)]'} `}>${price}</span>
                                    {oldPrice && (
                                        <span className="text-lg text-gray-400 line-through">${oldPrice}</span>
                                    )}
                                </div>
                            </div>
                            <div className="my-5 bg-green-100 border border-green-500 rounded-lg w-fit px-3 py-2">
                                Availability : <span className="text-green font-bold">In stock</span>
                            </div>
                            <div className="border-t "></div>

                            <div className="my-5">
                                <span className="text-sm text-grayColor pb-2 block">Quantity : </span>
                                <div className="flex  gap-5">
                                    <Quantity />
                                    <button className="bg-primary text-white px-5 py-2 rounded-md">Add to cart</button>
                                </div>
                            </div>
                            <div className="border-t my-7"></div>
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-900"><span className="text-grayColor">SKU:</span>#veg20967</p>
                                <p className="text-gray-900"><span className="text-grayColor">Brand:</span>mangogn</p>
                                <p className="text-gray-900"><span className="text-grayColor">Vendor:</span>MartFury</p>
                                <p className="text-gray-900"><span className="text-grayColor">Categories:</span>Breakfast Cereals, Chocolate & Sweets, Crisps, Snacks & Nuts, Food Cupboard, Tins & Cans</p>
                                <p className="text-gray-900"><span className="text-grayColor">Tag:</span>Best Seller</p>
                            </div>
                        </div>
                        <div className="lg:w-1/5 w-full">
                            <div className="bg-[#F3F3F3] px-5 py-7 rounded-md">
                                <FooterCard
                                    image="/Icons/f_1.png"
                                    title="Free Shipping"
                                    subtitle="For all orders over $200"
                                />
                                <div className="border-t my-5"></div>
                                <FooterCard
                                    image="/Icons/f_2.png"
                                    title="1 & 1 Returns"
                                    subtitle="Cancellation after 1 day"
                                />
                                <div className="border-t my-5"></div>
                                <FooterCard
                                    image="/Icons/f_3.png"
                                    title="100% Secure Payment"
                                    subtitle="Gurantee secure payments"
                                />
                            </div>
                            <div className="bg-[#F3F3F3] px-5 mt-5 py-7 rounded-md">
                                <p className="font-bold text-title">Hotline Order</p>
                                <span className="text-grayColor">Mon - Fri: 7:00 am - 18:00PM</span>
                                <p className="text-xl md:text-2xl font-bold text-title mt-5">+8801 64613 4530</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails













