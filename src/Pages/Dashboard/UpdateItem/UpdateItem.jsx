import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { FaUtensilSpoon } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItem = () => {
    const {name,category,recipe,price,_id} = useLoaderData()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit,reset } = useForm()
    // console.log(item)
     const onSubmit = async (data) => {
            // console.log(data)
            const imageFile ={image: data.image[0]}
            const res = await axiosPublic.post(image_hosting_api,imageFile,{
                headers:{
                    'content-type': 'multipart/form-data'
                }
               
            })
            // console.log(res.data.success)
            
            if(res.data.success){
                const menuItem ={
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    image: res.data.data.display_url
                }
                const menuRes = await axiosSecure.patch(`/menu/${_id}`,menuItem)
                console.log(menuRes.data)
                if(menuRes.data.insertedId){
                    reset()
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
                        title: `${data.name} is Updated`
                      });
                }
            }
           
        };
    return (
        <div>
            <SectionTitle heading={'update item'} subHeading={'Refresh Info'}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset w-full my-6 from-control">
                        <legend className="fieldset-legend">Recipe Name*</legend>
                        <input defaultValue={name} {...register('name', { required: true })} type="text" required className="input w-full" placeholder="Recipe Name" />

                    </fieldset>
                    <div className='flex gap-6 from-control'>
                        {/* category */}
                        <fieldset className="fieldset w-full my-6">
                            <legend className="fieldset-legend">Category*</legend>
                            <select defaultValue={category} {...register('category', { required: true })} className="select select-bordered w-full ">
                                <option disabled value='default'>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>

                            </select>


                        </fieldset>
                        <fieldset className="fieldset w-full my-6">
                            <legend className="fieldset-legend">Price*</legend>
                            <input defaultValue={price} {...register('price', { required: true })} type="number" className="input w-full" placeholder="Price" />

                        </fieldset>
                    </div>
                    {/* recipe details */}

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Recipe Details</legend>
                        <textarea defaultValue={recipe} {...register('recipe')} className="textarea h-24 w-full" placeholder="Details"></textarea>

                    </fieldset>
                    <div className='from-control w-full my-10'>
                        <input {...register('image', { required: true })} type="file" className="file-input" />
                    </div>

                    <button className='btn my-10'>
                      Update Menu Item
                    </button>

                </form>
            </div>
        </div>
    );
};

export default UpdateItem;