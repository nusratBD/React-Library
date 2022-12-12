import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const {option, price, benefits} = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{option}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <h3 className='text-xl text-left flex items-center'>Benefits:</h3>
            {
                benefits.map(benefit=><Benefit benefit={benefit}></Benefit>)
            }
            <button className='bg-green-500 text-white flex justify-center w-full mt-6 py-2 rounded font-bold hover:bg-green-800'>Buy Now <ArrowRightIcon className='h-6 w-6'></ArrowRightIcon> </button>
     </div>
    );
};

export default PricingOption;