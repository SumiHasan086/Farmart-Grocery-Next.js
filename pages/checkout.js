import React from 'react'
import BillingInfo from '../app/components/Checkout/BillingInfo'
import YourOrder from '../app/components/Checkout/YourOrder'
import Breadcrumb from '../app/components/shared/Breadcrumb'

const Checkout = () => {
  return (
    <main>
      {/* Breadcumb */}
      <div className="py-5 bg-[#f5f5f5]">
        <div className=" mx-auto max-w-5xl">
          <Breadcrumb />
        </div>
      </div>
      <div className="p-5">
        <div className=" mx-auto max-w-5xl mt-10">
           <h1 className="text-4xl text-title text-center font-bold mb-10">Checkout</h1>
           <div className="flex flex-wrap md:flex-nowrap gap-5">
                <div className="w-full md:w-[60%]">
                  <BillingInfo />
                </div>
                <div className="w-full md:w-[40%]">
                 <YourOrder />
                </div>
           </div>
        </div>
      </div>
    </main>
  )
}

export default Checkout