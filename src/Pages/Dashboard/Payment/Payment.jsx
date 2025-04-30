import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('')

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"payment"} subHeading={'Please Pay To Eat'}></SectionTitle>

            <div>
                <Elements stripe={stripePromise}>
                    
                </Elements>
            </div>
            
        </div>
    );
};

export default Payment;