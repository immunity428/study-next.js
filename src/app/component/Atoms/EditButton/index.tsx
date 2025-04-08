import React from 'react';
import Pencil from '../../../../../public/pencil.svg';

const EditButton = () => {
  return (
    <div className='w-5 h-5 flex justify-center items-center'>
      <Pencil className='z-0 hover:bg-[#B8B8B8]/20 rounded-full' />
    </div>
  );
};

export default EditButton;
