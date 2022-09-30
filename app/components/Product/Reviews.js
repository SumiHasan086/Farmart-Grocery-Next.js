import React from 'react'

const Reviews = () => {
  return (
    <div className="flex items-start gap-10 md:flex-nowrap flex-wrap">
        <div className="border p-5 md:w-2/6 w-full">
            <h1 className="text-orange-600 font-bold md:text-2xl text-xl">5.00</h1>
            <p className="text-sm">⭐⭐⭐⭐⭐</p>
            <p className="text-sm">Based on 1 reviews</p>
            <div className="mt-3 border-t pt-5">
                <img src="/images/review.png" alt="" />
            </div>
        </div>
        <div className="py-5 md:py-0 flex-1">
            <h3 className="font-bold text-title text-lg ">ADD YOUR REVIEW</h3>
            <p className="">Your rating: ⭐⭐⭐⭐⭐</p>
            <textarea className="w-full border p-2 mt-2 h-40" placeholder="Your review"/>
            <button className="btn-white bg-orange-500 text-white">Submit</button>
        </div>
    </div>
  )
}

export default Reviews