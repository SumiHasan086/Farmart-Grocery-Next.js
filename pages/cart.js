import React from 'react'
import { useSelector } from 'react-redux'
import CartAction from '../app/components/cart/CartAction'
import CartTable from '../app/components/cart/CartTable'
import Breadcrumb from '../app/components/shared/Breadcrumb'
import { selectItems } from '../app/redux/slices/basketSlice'

const Cart = () => {

  const cartItems = useSelector(selectItems)

  return (
    <main>
      {/* Bredcum */}
      <div className="py-5 bg-[#f5f5f5]">
        <div className=" mx-auto max-w-5xl">
          <Breadcrumb />
        </div>
      </div>
      <div className="p-5">
        <div className=" mx-auto max-w-5xl mt-10">
          <h1 className="text-4xl text-title text-center font-bold mb-10">Cart</h1>

          {cartItems.length > 0 ? (
            <>
              <CartTable />
              <CartAction />
            </>
          ) : (
            <>
              <img
                src="/images/empty-cart.jfif" loading="lazy" alt=""
                className="mx-auto w-1/2"
              />
              <h2 className="text-center text-2xl font-bold my-5">Your cart is empty.</h2>
            </>
          )}

        </div>
      </div>
    </main >
  )
}

export default Cart