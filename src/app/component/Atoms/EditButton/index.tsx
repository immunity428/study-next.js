import React from 'react';
import dynamic from 'next/dynamic';

const Pencil = dynamic(
  () => import('../../../../../public/assets/svg/pencil.svg')
);

const EditButton = () => {
  return (
    <div className='relative w-5 h-5 flex justify-center items-center'>
      <Pencil className='z-0' />
      <div className='absolute inset-0 hover:bg-[#B8B8B8] opacity-20 rounded-full z-1' />
    </div>
  );
};

export default EditButton;
