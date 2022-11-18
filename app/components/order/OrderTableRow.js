import { Tooltip } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { timeAgo } from '../../utils/helper';


const OrderTableRow = ({ name, order_id, items, total, payment_success, created_at }) => {


    return (
        <>
            <tr className="border-b md:border-r md:border-l table_row">
                <td className="py-5 pl-3">
                    <Tooltip label={order_id}>
                        <h3 className="truncate cursor-pointer w-20">{order_id}</h3>
                    </Tooltip>

                </td>
                <td className="py-5 max-w-[200px]">
                    <div className="">
                        {items.map((item, i) => (
                            <Link key={i} href={`/products/${item.id}`}>
                                <h1 className="text-base font-bold cursor-pointer hover:text-primary text-title">
                                    {item?.name}
                                    <span className="text-sm text-gray-500">(×{item?.quantity})</span>
                                </h1>
                            </Link>
                        ))}

                    </div>
                </td>
                <td className="py-5">${total}</td>
                <td className="py-5">
                    {timeAgo(created_at)} ago
                </td>
                {/* payment_success */}
                <td className="py-5">
                    {payment_success ? 'success' : 'failed'}
                </td>
                <td className="py-5">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <p className="text-sm text-yellow-500">Pending</p>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default OrderTableRow