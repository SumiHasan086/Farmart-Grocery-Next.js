import React from 'react'
import Button from '../shared/Button'

const FailedContent = () => {

    return (
        <div className="mb-5">

            <img
                src="/gif/failed.gif" loading="lazy" alt=""
                className="mx-auto w-1/2 rounded-2xl"
            />
            <h2 className="text-center text-lg mt-6 font-semibold">Your payment has failed.</h2>
            <h2 className="text-center text-base mt-2">Please try again!</h2>
            <Button title="Back Home" className="md:w-1/2 w-full mx-auto py-5 mt-5 block"></Button>

        </div>
    )
}

export default FailedContent