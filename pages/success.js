import React from 'react'
import SuccessContent from '../app/components/order/SuccessContent'

const Success = () => {
  return (
    <main>
      {/* Breadcumb */}
      <div className="p-5">
        <div className=" mx-auto max-w-5xl mt-10">
           <h1 className="text-4xl text-title text-center font-bold mb-10">Success</h1>
           <SuccessContent />
        </div>
      </div>
    </main>
  )
}

export default Success