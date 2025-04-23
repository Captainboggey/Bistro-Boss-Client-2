import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center md:w-4/12 mx-auto my-2'>
            <p className='text-yellow-500 italic'>---{subHeading}---</p>
            <h3 className='text-4xl uppercase border-y-2 p-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;