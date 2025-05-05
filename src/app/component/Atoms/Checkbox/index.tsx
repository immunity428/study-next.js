'use client';
import React from 'react';
import Check from '../../../../../public/check.svg';

type CheckboxProps = {
  onClick: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ onClick }) => {
  return (
    <div className='w-5 h-5 border-[2px] border-[#B8B8B8] flex items-center justify-center group rounded-[2px]'>
      <Check className='hidden group-hover:block' />
    </div>
  );
};

export default Checkbox;
