import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import DASHBOARD_NAV from '../../configs/dashboard_nav'

const DashBoardNavigation = () => {
  const  router= useRouter()
  return (
    <div className="bg-gray-100 p-4 rounded-md space-y-2 flex flex-col">
        {DASHBOARD_NAV.map((nav_item)=>{
            return(
               <Link href={`${nav_item.href}`}>
                   <a className={`flex items-center gap-4 ${router.pathname == nav_item.href && "bg-[#c4e4e3]"} rounded-md cursor="pointer p-2`}
                   key={nav_item.href}
                   href={`${nav_item.href}`}
                   >
                   <div className="flex items-center justify-center text-base text-white bg-primary bg-opacity-90 p-3 rounded-md">
                     {nav_item.icon} 
                   </div> 
                   <h4 className="font-semibold">{nav_item.title}</h4>    
                   </a>
               </Link>
            )
        })}
        
    </div>
  )
}

export default DashBoardNavigation