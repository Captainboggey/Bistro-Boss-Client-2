import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaEdit, FaTrash, FaUser } from 'react-icons/fa';
import { FaUpLong } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const MangeItems = () => {
    const [menu,loading,refetch] = useMenu()
    const axiosSecure = useAxiosSecure();
    const handleDeleteItem=(item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res =await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data,item._id,item.name)
                if(res.data.deletedCount>0){
                    refetch()
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.onmouseenter = Swal.stopTimer;
                          toast.onmouseleave = Swal.resumeTimer;
                        }
                      });
                      Toast.fire({
                        icon: "success",
                        title: `${item.name}Deleted Successfully`
                      });
                }
            }
          });
    }
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
                                    <Link to={`/dashboard/updateItem/${item._id}`}><td>
                                        <button  className="btn btn-ghost btn-lg"><FaEdit className='text-red-600'></FaEdit></button>
                                    </td></Link>
                                    <td>
                                        <button onClick={()=>handleDeleteItem(item)} className="btn btn-ghost btn-lg"><FaTrash className='text-red-600'></FaTrash></button>
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