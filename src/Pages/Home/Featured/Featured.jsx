import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import fimg from '../../../assets/home/featured.jpg'
import  './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item pt-10 my-20 text-white'>
            <SectionTitle heading={"Featured items"} subHeading={"check it out"}> </SectionTitle>
                <div className='md:flex justify-center items-center pb-20 pt-12 px-36 '>
                    <div>
                        <img src={fimg} alt="" />
                    </div>
                    <div className='md:ml-10'>
                        <p>Aug 20, 2020</p>
                        <p className='uppercase'>where can i get some?</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae adipisci, deleniti cum quae in molestias exercitationem nulla, laudantium laboriosam sed maiores deserunt rem modi. Fuga laboriosam repellendus aut atque accusantium reiciendis delectus, placeat aliquid corrupti nihil amet. Rem ullam iure vel ad praesentium, totam vero nisi. Eius dolorum eligendi ducimus.
                        </p>
                        <button className='btn btn-outline'>Order Now</button>
                    </div>
                </div>
           
        </div>
    );
};

export default Featured;