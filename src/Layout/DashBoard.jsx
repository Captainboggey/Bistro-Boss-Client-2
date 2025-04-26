import React from 'react';
import { FaAd, FaCalendar, FaHome, FaList } from 'react-icons/fa';
import { HiMiniShoppingCart } from 'react-icons/hi2';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className='menu p-4'>
                <li>
                    
                    <NavLink to={'/dashboard/userHome'}><FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                    
                    <NavLink to={'/dashboard/reservation'}><FaCalendar></FaCalendar> Reservation</NavLink>
                    </li>
                    <li>
                    
                        <NavLink to={'/dashboard/cart'}><HiMiniShoppingCart /> My Cart</NavLink>
                        </li>
                        <li>
                    
                    <NavLink to={'/dashboard/review'}><FaAd></FaAd>Review</NavLink>
                    </li>
                    <li>
                    
                    <NavLink to={'/dashboard/bookings'}><FaList></FaList> User Home</NavLink>
                    </li>
                   
                </ul>
            </div>

            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;