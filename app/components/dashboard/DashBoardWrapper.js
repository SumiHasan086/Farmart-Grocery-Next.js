import React from 'react'
import DashBoardNavigation from './DashBoardNavigation'

const DashBoardWrapper = ({ children }) => {
    return (
        <div className="bg-white px-5 py-10">
            <div className="mx-auto max-w-5xl">
                <div className="flex md:flex-nowrap flex-wrap gap-5">
                   <div className="w-full md:w-1/4">
                    <DashBoardNavigation />
                   </div>
                   <div className="flex-1">
                   { children }
                   </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoardWrapper