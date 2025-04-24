import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menubg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import d1 from '../../../assets/menu/dessert-bg.jpeg'
import p1 from '../../../assets/menu/pizza-bg.jpg'
import s1 from '../../../assets/menu/salad-bg.jpg'
import su1 from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu]=useMenu();
    const dessert = menu.filter(item=> item.category === 'dessert');
    const soup = menu.filter(item=> item.category === 'soup');
    const salad = menu.filter(item=> item.category === 'salad');
    const pizza = menu.filter(item=> item.category === 'pizza');
    const offered = menu.filter(item=> item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
           <Cover coverTitle={'our menu'} img={menubg}></Cover>
           {/* offered */}
          <SectionTitle heading={"today's offer"} subHeading={"Don't Miss"}></SectionTitle>
          <MenuCategory items={offered}></MenuCategory>
          {/* dessert */}
          <MenuCategory items={dessert} title={'desert'} coverImg={d1}></MenuCategory>
          {/* pizza */}
          <MenuCategory items={pizza} title={'Pizza'} coverImg={p1}></MenuCategory>
          {/* salads */}
          <MenuCategory items={salad} title={"salads"} coverImg={s1}></MenuCategory>
          {/* soups */}
          <MenuCategory items={soup} title={"soup"} coverImg={su1}></MenuCategory>
          
        </div>
    );
};

export default Menu;