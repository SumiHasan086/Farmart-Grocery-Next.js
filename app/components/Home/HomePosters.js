import React from 'react'
import { useBackgroundImage } from '../../utils/helper'

const HomePosters = () => {
    return (
    <section
        className="py-10"
        style={useBackgroundImage(`images/hero-bg.jpg`)}
    >
        <div className="container">
            <div className="flex gap-8 flex-wrap">
                {/* Hero right banner */}
                <div className="md:w-1/3 w-full md:py-14 md:px-12 py-10 px-6 rounded-lg" style={useBackgroundImage(`https://demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-banner-2.png`,{backgroundColor:'#fac250',
                backgroundPosition:'bottom-right',
                backgroundSize:'cover'})}>
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h2 className="md:text-4xl sm:text-2xl text-3xl  text-title">Mango Juice Bottle</h2>
                        </div>
                        <span className="text-md font-semibold md:mt-14 mt-10">Lorem ipsum dolor sit amet </span>
                    </div>
                </div>
                <div className="md:w-1/3 w-full md:py-14 md:px-12 py-10 px-6 rounded-lg" style={useBackgroundImage(`https://demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-banner-3.png`,{backgroundColor:'#D5DEE5',
                backgroundPosition:'bottom-right',
                backgroundSize:'cover'})}>
                    <div className="flex flex-col justify-between h-full">
                        <div className="relative">
                            <h2 className="md:text-4xl sm:text-2xl text-xl text-red-600 font-bold text-title">$9,9</h2>
                            <span className="absolute font-bold left-[50%] top-[10%] text-md text-title line-through">$15.6</span>
                            <h3 className="mt-2 font-semibold text-xl">MEAT PORK CANNED</h3>
                        </div>
                        <span className="text-lg font-semibold md:mt-14 mt-10">250mg </span>
                    </div>
                </div>
                <div className="md:w-1/3 w-full md:py-14 md:px-12 py-10 px-6 rounded-lg text-white" style={useBackgroundImage(`https://demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-banner-4.png`,{backgroundColor:'#FEAC7D',
                backgroundPosition:'center',backgroundSize:'cover'})}>
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h2 className="md:text-4xl sm:text-2xl text-xl text-white font-bold ">Olive oil</h2>
                            <p className="md:mt-7 mt-4 text-white text-sm font-bold">Best products to make <br />your favor</p>
                        </div>
                        <span className="text-white text-sm font-semibold md:mt-14 mt-10">ONLY </span>
                        <span className="text-3xl font-bold text-white">$12.5</span>
                    </div>
                </div>


            </div>
        </div>
    </section>
)
}


export default HomePosters