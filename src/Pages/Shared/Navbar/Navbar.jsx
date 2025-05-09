import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { HiMiniShoppingCart } from 'react-icons/hi2';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin]=useAdmin()
    const [cart]=useCart()
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }
    const navOptions = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/order/salad'}>Order Food</Link></li>
        {
            user && isAdmin && <li><Link to={'/dashboard/adminHome'}>Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to={'/dashboard/userHome'}>Dashboard</Link></li>
        }
        <li className='items-center'><Link to={'/dashboard/cart'}>
        
            <button className="btn btn-sm">
            <HiMiniShoppingCart />
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </Link></li>

        {
            user ?
                <>
                    {/* <span>{user.displayName}</span> */}
                    <button onClick={handleLogout} className='btn btn-ghost btn-sm'>Logout</button></> :
                <li><Link to={'/login'}>Login</Link></li>
        }
        {
            user? <button>{user.displayName}</button>: ' '
        }
    </>
    return (
        <div className="navbar bg-black max-w-screen-xl mx-auto text-white bg-opacity-30 pb-2 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">

                        {navOptions}
                    </ul>
                </div>
                <Link to={'/'}><button className="btn btn-ghost text-xl flex-col gap-0 p-8">Bistro Boss <span >Restaurant</span></button></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;