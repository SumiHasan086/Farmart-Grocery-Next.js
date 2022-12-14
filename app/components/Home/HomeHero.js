import React from 'react'
import { useBackgroundImage } from '../../utils/helper'

const HomeHero = () => {



    return (
        <section
            className="py-10"
            style={useBackgroundImage(`images/hero-bg.jpg`)}
        >
            <div className="container">
                <div className="flex gap-8 flex-wrap">
                    {/* Hero left banner */}
                    <div className="flex-1 md:py-14 md:px-12 py-10 px-6 rounded-lg" style={useBackgroundImage(`images/hero-s-1.jpg`)}>
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-title">Active Summer With <br /> Juice Milk 300ml</h2>
                                <p className="text-grayColor md:mt-7 mt-4">New arrivals with nature fruits, juice,<br /> milks, essential for summer.</p>
                            </div>
                            <a href="/" className="btn-white md:mt-14 mt-10">Shop Now</a>
                        </div>
                    </div>
                    {/* Hero right banner */}
                    <div className="md:w-1/3 w-full md:py-14 md:px-12 py-10 px-6 rounded-lg" style={useBackgroundImage(`images/hero-s-2.jpg`,{backgroundPosition:'bottom-right',backgroundColor:'#fac251',backgroundSize:'unset'})}>
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-title">20% SALE OFF</h2>
                                <p className="text-title md:mt-7 mt-4 font-semibold">Synthetic seeds <br />
                                    Net 2.0 OZ
                                </p>
                            </div>
                            <a href="/" className="btn-white md:mt-14 mt-10">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero