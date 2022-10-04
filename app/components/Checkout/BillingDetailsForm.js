import React from 'react'
import { AppTextArea, FormDropdown, FormInput } from '../shared/Form'

const countries=[
  {title:"United States"},
  {title:"Canada"},
  {title:"France"},
  {title:"Germany"},
  {title:"United Kingdom"},
  {title:"India"},
  {title:"Austrilia"},
  {title:"Turki"},
  {title:"Bangladesh"},
  {title:"Egypt"},
  {title:"Myanmar"},
  {title:"Malaysia"},
  {title:"Saudi"},
  {title:"Nepal"},
  {title:"Bhutan"}
]

const BillingDetailsForm = () => {


  return (
    <div>
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
          <AppTextArea
            name='notes'
            placeholder="Order notes (optional)"
            type="textarea"
         />
    </div>
  )
}

export default BillingDetailsForm