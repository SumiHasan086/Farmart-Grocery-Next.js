import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Button from '../shared/Button'

const SuccessContent = () => {

    const [isTracking, setIsTracking] = React.useState(false)
    const router = useRouter()
    const {order_id} = router.query 

    useEffect(() => {
        setTimeout(() => {
            setIsTracking(true)
        },3000)
    },[])

    return (
        <div className="mb-5">

            {!isTracking ? (
                <>
                    <img
                        src="/gif/success.gif" loading="lazy" alt=""
                        className="mx-auto w-1/2"
                    />
                    <h2 className="text-center text-lg ">Thank you. Your payment is successful!.👍</h2>
                    <h2 className="text-center text-lg font-bold ">Order processing.....</h2>
                </>
            ) : (
                <>
                    <img
                        src="/gif/order-done.gif" loading="lazy" alt=""
                        className="mx-auto w-1/2 rounded-2xl"
                    />
                    <h2 className="text-center text-lg mt-6 font-semibold">Order successfully completed!.👍</h2>
                    <h2 className="text-center text-base mt-2">Your order is on it's way!</h2>
                    <h2 className="text-center text-base mt-2">Order id: <strong>{order_id}</strong></h2>
                    <Button onClick={() => router.push(`/my-account/orders?order_id=${order_id}`)} title="View Order" className="md:w-1/2 w-full mx-auto py-5 mt-5 block"></Button> 
                </>
            )}

        </div>
    )
}

export default SuccessContent