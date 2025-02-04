import React from 'react'
import { Container } from 'react-bootstrap'

const PayWallet = () => {
  return (
    <>
      <div className='my-4'>
        <Container>
            <h3 className='fw-bold my-4 text-dark '>Pay With Razorpay {}</h3>
            <div>

           
            <div className='shadow-sm  rounded-3 border p-3'>
               <div className='d-flex justify-content-between px-2 bg-color'>
                <p className='fw-bold text-white p-2'>PAY WITH</p>
                <p className='fw-bold text-white p-2'>TOTAL</p>
               </div>
               <div className='d-flex justify-content-between px-2 bg-white border'>
                <p className='fw-bold text-dark p-2'> Razorpay Payment </p>
                <p className='fw-bold text-dark p-2'>Pay {}</p>
               </div>
            </div>
            </div>
        </Container>
      </div>
    </>
  )
}

export default PayWallet