import React from 'react';
import dynamic from 'next/dynamic';

const Plus = dynamic(() => import('../../../../../public/assets/svg/Plus.svg'));

const AddTaskButton = () => {
  return (
    <div className='relative w-35 h-8 flex justify-center items-center'>
      <div className='flex flex-row items-center justify-center gap-[10px] px-[2px] py-[6px]'>
        <Plus className='z-0' />
        <span className='text-[#46A381] font-[Noto_Sans_JP] text-sm not-italic font-medium leading-5'>
          タスクを追加
        </span>
      </div>
      <div className='absolute inset-0 hover:bg-[#46A381] opacity-20 rounded-full z-1' />
    </div>
  );
};

export default AddTaskButton;
