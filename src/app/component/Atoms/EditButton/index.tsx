'use client';
import React from 'react';
import Pencil from '../../../../../public/pencil.svg';

type EditButtonProps = {
  onClick: () => void;
};

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <Pencil
      onClick={onClick}
      className='hover:bg-[#B8B8B8]/20 rounded-full cursor-pointer'
    />
  );
};

export default EditButton;
