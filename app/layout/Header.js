import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import Search from '../components/shared/Search';
import { useSelector } from 'react-redux';
import { selectTotalCartItems, selectTotalPrice } from '../redux/slices/basketSlice';

const Header = () => {

 const cartItems=useSelector(selectTotalCartItems)
 const totalPrice=useSelector(selectTotalPrice)

  return (
    <header className="bg-white py-7 border-b">
      <div className="container">
        {/* Header Top Area */}
        <div className="!flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <a href="/" className="text-4xl text-primary">
              <Image
                src="/images/logo.png"
                width="160"
                height="55"
                objectFit="contain"
              />
              
            </a>
          </Link>
          {/* Search */}
          <Search />
          {/* Contact */}
          <div className="lg:flex flex-col hidden">
            <span className="text-xl font-bold ">8 800 332 65-66</span>
            <p className="text-grayColor">Support 24/7 </p>
          </div>
          {/* Icons */}
          <div className="flex items-center gap-5">
            <Link href="/my-account">
              <a href="/my-account" className="">
                <AiOutlineUser className="text-xl text-title" />
              </a>
            </Link>
            <Link href="/cart">
              <a href="/cart" className="flex items-center gap-5">
                <div className="relative">
                  <AiOutlineShoppingCart className="text-3xl text-title" />
                  <span className="bg-primary rounded text-center absolute px-2 text-sm -right-3 -top-2 font-bold">{cartItems || 0}</span>
                </div>

                <div className="hidden lg:block">
                  <span className="text-grayColor text-sm">Your Cart</span>
                  <p className="text-title font-bold text-lg">{totalPrice}</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header












