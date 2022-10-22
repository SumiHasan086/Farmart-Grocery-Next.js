import React from 'react'
import Auth from '../components/auth'
import Breadcrumb from '../components/shared/Breadcrumb';
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/slices/authSlice';

const SecureLayout = ({ children }) => {
  const user = useSelector(selectUser);

  return (
    <main>
      {user ? (
        <>
          {children}
        </>
      ) : (
        <>
          <div className="py-5 bg-[#f5f5f5]">
            <div className=" mx-auto max-w-5xl">
              <Breadcrumb />
            </div>
          </div>
          <Auth />
        </>
      )}
    </main>
  )
}

export default SecureLayout