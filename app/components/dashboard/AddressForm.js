import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import * as Yup from "yup";
import { selectUser } from '../../redux/slices/authSlice';
import { db } from '../../utils/firebase'
import { AppForm, FormBtn, FormDropdown, FormInput } from '../shared/Form';
import { showNotification } from '@mantine/notifications';


const countries = [
    { title: "United States" },
    { title: "Canada" },
    { title: "France" },
    { title: "Germany" },
    { title: "United Kingdom" },
    { title: "India" },
    { title: "Austrilia" },
    { title: "Turki" },
    { title: "Bangladesh" },
    { title: "Egypt" },
    { title: "Myanmar" },
    { title: "Malaysia" },
    { title: "Saudi" },
    { title: "Nepal" },
    { title: "Bhutan" }
]

const validationSchema = Yup.object().shape({
    first_name: Yup.string().max(25).required().label("First name"),
    last_name: Yup.string().max(25).required().label("Last name"),
    company: Yup.string().label("Company name"),
    country: Yup.string().required().label("Country / Region"),
    address: Yup.string().required().label("Address"),
    city: Yup.string().required().label("City"),
    state: Yup.string().required().label("State / Province"),
    zip: Yup.string().required().label("ZIP / Postal code"),
    phone: Yup.string().required().label("Phone"),
    email: Yup.string().email().required().label("Email"),
    notes: Yup.string().max(500).label("Order notes"),

});



const AddressForm = () => {

    const user = useSelector(selectUser)
    const [loading ,setLoading] = useState(false);

    const updataAddress = async (values) => {
        setLoading(true)
        await db.collection('users').doc(user.uid).set({
            billing_details: { ...values },
        }, { merge: true })
        .then(() => {
            showNotification({ title: "Updated successfully", message: 'Address information 0Updated successfully' })
        })
        .catch((error) => {
            showNotification({ title: "Failed", message: 'Something went wrong', color: 'red', })
            console.log(error)
        })
        .finally(() => setLoading(false))
    }

    return (
        <div>
            <h1 className="text-center text-3xl mb-5 font-bold">Update Billing Address</h1>
            <div>
                <AppForm
                    initialValues={{
                        first_name: user?.billing_details?.first_name || "",
                        last_name: user?.billing_details?.last_name || "",
                        company: user?.billing_details?.company || "",
                        country: user?.billing_details?.country || "",
                        address: user?.billing_details?.address || "",
                        city: user?.billing_details?.city || "",
                        state: user?.billing_details?.state || "",
                        zip: user?.billing_details?.zip || "",
                        phone: user?.billing_details?.phone || "",
                        email: user?.billing_details?.email || "",
                        notes: "",
                    }}
                    onSubmit={updataAddress}
                    validationSchema={validationSchema}
                >

                    <FormInput
                        name='first_name'
                        placeholder="First Name"
                    />
                    <FormInput
                        name='last_name'
                        placeholder="Last Name"
                    />
                    <FormInput
                        name='company'
                        placeholder="Company Name (optional)"
                    />
                    <FormDropdown
                        name='country'
                        placeholder="Country / Region"
                        items={countries}
                    />
                    <FormInput
                        name='address'
                        placeholder="Street Address"
                    />
                    <FormInput
                        name='city'
                        placeholder="Town / City"
                    />
                    <FormInput
                        name='state'
                        placeholder="State / Province"
                    />
                    <FormInput
                        name='zip'
                        placeholder="ZIP / Postal Code"
                    />
                    <FormInput
                        name='phone'
                        placeholder="Phone"
                    />
                    <FormInput
                        name='email'
                        placeholder="Email Address"
                        type="email"
                    />
                    <FormBtn
                    title="Update"
                    loading={loading}
                />
                </AppForm>
                
            </div>
        </div>
    )
}

export default AddressForm