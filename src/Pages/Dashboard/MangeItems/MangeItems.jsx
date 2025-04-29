import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaEdit, FaTrash, FaUser } from 'react-icons/fa';
import { FaUpLong } from 'react-icons/fa6';

const MangeItems = () => {
    const [menu] = useMenu()
    return (
        <div>
            <SectionTitle heading={'Manage All items'} subHeading={'Hurry Up'}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item,i)=><tr key={item._id}>
                                    <th>
                                       {i+1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </td>
                                    <td>
                                       {item.name}
                                    </td>
                                    <td className='text-right'>
                                        ${item.price}
                                    </td>
                                    <td>
                                        <button  className="btn btn-ghost btn-lg"><FaEdit className='text-red-600'></FaEdit></button>
                                    </td>
                                    <td>
                                        <button onClick={()=>handleDeleteItem(item._id)} className="btn btn-ghost btn-lg"><FaTrash className='text-red-600'></FaTrash></button>
                                    </td>
                                </tr>
                               )
                            }
                          
                            
                        </tbody>
                      
                       
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MangeItems;