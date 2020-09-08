import React from 'react'
import Checkout from 'react-stripe-checkout'


const StripeCheckout = ({totalPrice}) => {
   const price = totalPrice
   const amount = totalPrice * 100
   const publishedKey = 'pk_test_51HKj4JEGgpo5RZGkhZcgypwmPcT1JC3oNPDcPPqpOapBhRu2Y94RzLJs867lY14AW7XnJTVcZsf4uZKpQS04r9Y700BIxE2Q9x'

    return <Checkout name='SHOP LTD' shippingAddress token={() => alert('payment succeceded')} amount={amount} // cents
    currency= 'ZAR'
    stripeKey= {publishedKey} price= {price}  description={`your total is $${price}`} image="https://i.pinimg.com/originals/4e/4b/06/4e4b06fe3fbca10096ece1aa6354479b.png"/>
}


export default StripeCheckout
