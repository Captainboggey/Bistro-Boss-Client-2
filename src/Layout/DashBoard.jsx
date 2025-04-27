import React from 'react';
import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaUser, FaUsers, FaVoicemail } from 'react-icons/fa';
import { HiMiniShoppingCart } from 'react-icons/hi2';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import { MdEmail } from 'react-icons/md';
import { FaSpoon } from 'react-icons/fa6';

const DashBoard = () => {
    const [cart] = useCart()
    const isAdmin = true
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className='menu p-4 '>
                    {
                        isAdmin ? <>
                            <li>

                                <NavLink className='hover:bg-purple-500 selection:bg-purple-600' to={'/dashboard/adminHome'}><FaHome></FaHome> Admin Home</NavLink>
                            </li>
                            <li>

                                <NavLink className='hover:bg-purple-500 selection:bg-purple-600' to={'/dashboard/addItems'}><FaSpoon></FaSpoon> Add Items</NavLink>
                            </li>
                            <li>

                                <NavLink className='hover:bg-purple-500 ' to={'/dashboard/manageItems'}><FaList />Manage Items</NavLink>
                            </li>
                            <li>

                                <NavLink className='hover:bg-purple-500 selection:bg-purple-600' to={'/dashboard/bookings'}><FaBook></FaBook>Manage Bookings</NavLink>
                            </li>
                            <li>

                                <NavLink className='hover:bg-purple-500 selection:bg-purple-600' to={'/dashboard/allUsers'}><FaUsers></FaUsers> All Users</NavLink>
                            </li>

                        </> :
                            <>
                                <li>

                                    <NavLink className='hover:bg-purple-500 selection:bg-purple-600' to={'/dashboard/userHome'}><FaHome></FaHome> User Home</NavLink>
                                </li>
                                <li>

                                    <NavLink className='hover:bg-purple-500 selection:bg-purple-600' to={'/dashboard/reservation'}><FaCalendar></FaCalendar> Reservation</NavLink>
                                </li>
                                <li>

                                    <NavLink className='hover:bg-purple-500 ' to={'/dashboard/cart'}><HiMiniShoppingCart /> My Cart ({cart.length})</NavLink>
                                </li>
                                <li>

                                    <NavLink className='hover:bg-purple-500 selection:bg-purple-600' to={'/dashboard/review'}><FaAd></FaAd>Review</NavLink>
                                </li>
                                <li>

                                    <NavLink className='hover:bg-purple-500 selection:bg-purple-600' to={'/dashboard/bookings'}><FaList></FaList> User Home</NavLink>
                                </li>
                            </>
                    }
                    {/*  */}
                    <div className='divider divider-primary w-full'></div>
                    <li>

                        <NavLink className='hover:bg-purple-500 selection:bg-purple-600' to={'/'}><FaHome></FaHome>  Home</NavLink>
                    </li>
                    <li>

                        <NavLink className='hover:bg-purple-500 selection:bg-purple-600' to={'/menu'}><FaSearch></FaSearch>Menu</NavLink>
                    </li>
                    <li>

                        <NavLink className='hover:bg-purple-500 selection:bg-purple-600' to={'/order/contact'}><MdEmail />Contact</NavLink>
                    </li>


                </ul>
            </div>

            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;