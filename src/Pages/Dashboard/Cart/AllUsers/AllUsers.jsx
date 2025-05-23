import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { FaTrash, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
   const handleDeleteUser = (user)=>{
         Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                    //   Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    //   });
                    axiosSecure.delete(`/users/${user._id}`)
                    .then(res=>{
                        console.log(res.data)
                        if(res.data.deletedCount>0){
                            refetch()
                               Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                        }
                    })
                    }
                  });
   }
   const handleMakeAdmin= user=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    title: `${user.name} is Now Admin`,
                    icon: "success",
                    draggable: true
                  });
            }
        })
   }
    return (
        <div>
            <div className='flex justify-evenly my-4'>
                <h2 className='text-3xl'>All Users</h2>
                <h2 className='text-3xl'>Total Users: {users.length} </h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user,i)=> <tr key={user._id}>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                {
                                    user.role=='admin'? 'Admin':<button onClick={()=>handleMakeAdmin(user)} className="btn bg-orange-400 text-white text-xl btn-md"><FaUser className='text-red-600'></FaUser></button> 

                                }
                                </td>
                                <td>
                                     <button onClick={()=>handleDeleteUser(user)} className="btn btn-ghost btn-lg"><FaTrash className='text-red-600'></FaTrash></button> 
                                </td>
                            </tr>)
                        }
                       
                      
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;