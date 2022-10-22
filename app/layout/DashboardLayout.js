import React from 'react'
import Auth from '../components/auth'
import DashBoardWrapper from '../components/dashboard/DashBoardWrapper'
import Breadcrumb from '../components/shared/Breadcrumb';
import {useSelector} from 'react-redux'
import { selectUser } from '../redux/slices/authSlice';

const DashboardLayout = ({children}) => {
    const user=useSelector(selectUser);

    return (
        <main>
          {/* Breadcumb */}
          <div className="py-5 bg-[#f5f5f5]">
            <div className=" mx-auto max-w-5xl">
              <Breadcrumb />
            </div>
          </div>
          {/* <Auth /> */}
          {user?(
            <DashBoardWrapper>
            {children}
           </DashBoardWrapper>
          ):(
            <Auth />
          )}
        </main>
      )
}

export default DashboardLayout