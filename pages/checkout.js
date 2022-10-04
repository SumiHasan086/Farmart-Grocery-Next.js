import React from 'react'
import CheckoutContent from '../app/components/Checkout/CheckoutContent'
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
           <CheckoutContent />
        </div>
      </div>
    </main>
  )
}

export default Checkout