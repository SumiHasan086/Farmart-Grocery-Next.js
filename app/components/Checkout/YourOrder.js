import React from 'react'
import { useSelector } from 'react-redux';
import { selectItems ,selectTotalPrice} from '../../redux/slices/basketSlice';
import { FormBtn } from '../shared/Form';

const YourOrder = ({ placeOrder , loading}) => {

    const cartItems = useSelector(selectItems);
    const cartTotal= useSelector(selectTotalPrice);

    return (
        <div>
            <h3 className="text-2xl mb-4">Your Order</h3>
            <div className="bg-gray-100 p-5 rounded-md">
                <div className="flex justify-between pb-5 border-b">
                    <h2 className="text-base font-bold">Product</h2>
                    <h2 className="text-base font-bold">TOTAL</h2>
                </div>
                <div className="space-y-3 bg-white rounded-md">
                    {cartItems.map((item,index) => (
                    <div key={index} className="flex justify-between py-5 px-5 border-b">
                        <h2 className="text-base font-medium">{item?.name} <span className="text-gray-400">(*{item?.quantity})</span></h2>
                        <h2 className="text-base font-bold ml-2">${item?.price}</h2>
                    </div>
                    ))}
                </div>
                <div className="flex justify-between py-5 border-b">
                    <h2 className="text-xl font-bold">Subtotal</h2>
                    <h2 className="text-xl font-bold text-green-500">${cartTotal}</h2>
                </div>
                <div className="pb-5 border-b space-y-3">
                    <span className="">Shipping</span>
                    <ul>
                        <li>-Flat rate</li>
                    </ul>
                    <p>Shipping to <strong>BD</strong>.</p>
                </div>
                <div className="flex justify-between py-5 border-b">
                    <h2 className="text-xl font-bold">Total</h2>
                    <h2 className="text-xl font-bold text-green-500">${cartTotal}</h2>
                </div>
                <div className="pt-5 border-b">
                    <h2 className="text-lg font-bold">Payment Method</h2>
                    <p className="text-gray-500 mt-3"> - Pay with a Debit/Credit Card</p>
                </div>
            </div>
            <FormBtn
                title="Place Order"
                onClick={placeOrder}
                loading={loading}
            />
        </div>
    )
}

export default YourOrder