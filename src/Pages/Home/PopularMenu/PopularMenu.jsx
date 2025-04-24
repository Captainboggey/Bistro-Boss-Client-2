import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu]=useMenu();
    const popular = menu.filter(item=> item.category ==='popular')
    // const [menu,setMenu]=useState([])
    // useEffect(()=>{
        
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems = data.filter(item => item.category ==="popular")
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <section>
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}></SectionTitle>
           <div className='grid md:grid-cols-2 gap-4 my-10'>
            {
                popular.map(item=><MenuItem item={item} key={item._id}></MenuItem>)
            }
           </div>
          <div className='text-center'>
          <button className='btn btn-outline border-0 border-b-2 mt-2 '>View Full Menu</button>
          </div>
        </section>
    );
};

export default PopularMenu;