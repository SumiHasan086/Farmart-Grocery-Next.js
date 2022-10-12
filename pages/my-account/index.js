import React from 'react'
import Auth from '../../app/components/auth'
import Breadcrumb from '../../app/components/shared/Breadcrumb'

const MyAccount = () => {
  return (
    <main>
      {/* Bredcum */}
      <div className="py-5 bg-[#f5f5f5]">
        <div className=" mx-auto max-w-5xl">
          <Breadcrumb />
        </div>
      </div>
      <Auth />
    </main>
  )
}

export default MyAccount