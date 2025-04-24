import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menubg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
           <Cover coverTitle={'our menu'} img={menubg}></Cover>
           <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;