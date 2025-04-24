import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,coverImg}) => {
    return (
        <div className='pt-8'>
            {title && <Cover coverTitle={title} img={coverImg}></Cover>}
              <div className='grid md:grid-cols-2 gap-4 my-20 mb-10 '>
            {
                items.map(item=><MenuItem item={item} key={item._id}></MenuItem>)
            }
           </div>
           <div className='text-center mb-20'>
         <Link to={`/order/${title}`}> <button className='btn btn-outline border-0 border-b-2 mt-2 '>View Full Menu</button></Link>
          </div>
        </div>
    );
};

export default MenuCategory;