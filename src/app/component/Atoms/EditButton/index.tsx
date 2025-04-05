import React from 'react';
import dynamic from 'next/dynamic';

const Pencil = dynamic(
  () => import('../../../../../public/assets/svg/pencil.svg')
);

const EditButton = () => {
  return (
    <div className='hover:bg-[#B8B8B8] hover:cursor-pointer rounded-full w-5 h-5 opacity-80'>
      <Pencil className='w-full h-full object-cover alt="EditButton' />
    </div>
  );
};

export default EditButton;
