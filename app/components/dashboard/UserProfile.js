import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slices/authSlice'
import Button from '../shared/Button'

const UserProfile = () => {

    const user = useSelector(selectUser)

    return (
        <div>
            <h1 className="text-3xl font-bold">User Profile</h1>
            {/* Name,image,email */}
            <div className="flexitems-center  gap-4 mt-5">
                <img src={user?.image} alt={user?.name} loading="lazy" />
                <div>
                    <h2 className="text-3xl font-semibold mt-4">{user?.name}</h2>
                    <h3 className="text-lg font-semibold text-[#269018] mt-1">{user?.email}</h3>
                </div>
            </div>

            <Link href="/my-account/orders">
                <Button
                    title="View Orders"
                    className="py-4 mt-5 text-white mr-5"
                />
            </Link>
            <Link href="/my-account/addresses">
                <Button
                    title="Update Billing Information"
                    className="py-4 mt-5 text-white"
                />
            </Link>
        </div>
    )
}

export default UserProfile