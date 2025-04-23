import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import fimg from '../../../assets/home/featured.jpg'
import  './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed pt-10 my-20 text-white'>
            <SectionTitle heading={"Featured items"} subHeading={"check it out"}> </SectionTitle>
                <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-800 opacity-60 '>
                    <div>
                        <img src={fimg} alt="" />
                    </div>
                    <div className='md:ml-10'>
                        <p>Aug 20, 2020</p>
                        <p className='uppercase'>where can i get some?</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae adipisci, deleniti cum quae in molestias exercitationem nulla, laudantium laboriosam sed maiores deserunt rem modi. Fuga laboriosam repellendus aut atque accusantium reiciendis delectus, placeat aliquid corrupti nihil amet. Rem ullam iure vel ad praesentium, totam vero nisi. Eius dolorum eligendi ducimus.
                        </p>
                        <button className='btn btn-outline border-0 border-b-2 mt-2'>Order Now</button>
                    </div>
                </div>
           
        </div>
    );
};

export default Featured;