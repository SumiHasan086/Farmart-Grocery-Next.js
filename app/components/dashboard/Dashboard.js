import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slices/authSlice'

const Dashboard = () => {

const user=useSelector(selectUser)

  return (
    <div className="">
      <h1 className="text-center text-2xl font-bold mb-4">Hi {user?.name} 💦💦</h1>
      <h1 className="text-center text-2xl font-bold mb-4"> Welcome to your Dashboard !</h1>
      <div className="flex flex-col items-center gap-4 mt-5">
                <img src={user?.image} alt={user?.name} loading="lazy" />
                <div>
                    <h2 className="text-3xl text-center font-semibold">{user?.name}</h2>
                    <h3 className="text-lg text-center mb-5 font-semibold text-[#269018] mt-1">{user?.email}</h3>
                </div>
            </div>
      {/* <img className="rounded-xl w-2/4 mx-auto" loading="lazy" src="/images/dashboard.webp" alt="personal setting" /> */}
    </div>
  )
}

export default Dashboard