import React from 'react';
import dynamic from 'next/dynamic';

const Check = dynamic(
  () => import('../../../../../public/assets/svg/check.svg')
);

const Checkbox = () => {
  return (
    <div className='w-5 h-5 border-[2px] border-[#B8B8B8] flex items-center justify-center group'>
      <Check className='hidden group-hover:block ' />
    </div>
  );
};

export default Checkbox;
