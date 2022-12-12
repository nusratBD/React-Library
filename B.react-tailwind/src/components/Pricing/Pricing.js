import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const options = [
        {id:1, option:'Free', price: 0.00, benefits: [
            'Lifetime Deals',
            'Fantastic Deals',
            'Awesome Deals',
            'Crazy Deals',
            'Localized Deals',
            'Umlimited Deals'
        ]},
        {id:1, option:'Regular', price: 9.99, benefits: [
            'Everything On Free',
            'Fantastic Deals',
            'Awesome Deals',
            'Crazy Deals',
            'Localized Deals',
            'Umlimited Deals'
        ]},
        {id:1, option:'Premium', price: 19.99, benefits: [
            'Everything On Regular',
            'Fantastic Deals',
            'Awesome Deals',
            'Crazy Deals',
            'Localized Deals',
            'Umlimited Deals'
        ]}
    ];
    return (
        <div className='bg-indigo-300 mt-12 p-4'>
            <h1 className='text-6xl font-mono text-white'>Best Deals Of The Town!</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate commonly used to demonstrate.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {options.map(option=><PricingOption key={option.id} option={option}></PricingOption>)}
            </div>
        </div>
    );
};

export default Pricing;