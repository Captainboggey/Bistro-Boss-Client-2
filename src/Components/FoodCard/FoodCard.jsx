import React from 'react';

const FoodCard = ({item}) => {
    const { image, price, recipe, name } = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='bg-black text-white absolute right-0 mr-4 mt-4 p-1 rounded-lg'>${price}</p>
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <p className='text-center'>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;