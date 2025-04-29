import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensilSpoon } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile ={image: data.image[0]}
        const res =await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data)
    };
    return (
        <div>
            <SectionTitle heading={'add an item'} subHeading={"Whats's New?"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset w-full my-6 from-control">
                        <legend className="fieldset-legend">Recipe Name*</legend>
                        <input {...register('name',{required: true})} type="text" required className="input w-full" placeholder="Recipe Name" />

                    </fieldset>
                    <div className='flex gap-6 from-control'>
                        {/* category */}
                        <fieldset className="fieldset w-full my-6">
                            <legend className="fieldset-legend">Category*</legend>
                            <select  defaultValue='default' {...register('category',{required: true})} className="select select-bordered w-full ">
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
                            <input {...register('price',{required: true})} type="number" className="input w-full" placeholder="Price" />

                        </fieldset>
                    </div>
                    {/* recipe details */}

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Recipe Details</legend>
                        <textarea {...register('recipe')} className="textarea h-24 w-full" placeholder="Details"></textarea>
                        
                    </fieldset>
                    <div className='from-control w-full my-10'>
                    <input {...register('image',{required: true})} type="file" className="file-input" />
                    </div>

                   <button className='btn my-10'>
                    Add Item <FaUtensilSpoon></FaUtensilSpoon>
                   </button>

                </form>
            </div>
        </div>
    );
};

export default AddItems;