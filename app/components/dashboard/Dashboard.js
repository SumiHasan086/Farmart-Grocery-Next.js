import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slices/authSlice'

const Dashboard = () => {

const user=useSelector(selectUser)

  return (
    <div className="">
      <h1 className="text-center text-2xl font-bold mb-4">Hi {user?.name} Welcome to your Dashboard !</h1>
      <img className="rounded-xl w-2/4 mx-auto" loading="lazy" src="/images/dashboard.webp" alt="personal setting" />
    </div>
  )
}

export default Dashboard