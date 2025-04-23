import React from 'react';

const MenuItem = ({ item }) => {
    const { image, price, recipe, name } = item

    return (
        <div className='flex space-x-2'>
            <img src={image} className='w-[100px] rounded-t-none rounded-r-full rounded-b-full' alt="" />
            <div>
                <h3>{name}---------------</h3>
                <p>{recipe}</p>
                </div>
                <p className='text-yellow-500'>${price}</p>
            
        </div>
    );
};

export default MenuItem;