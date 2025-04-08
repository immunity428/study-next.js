import React from 'react';
import Plus from '../../../../../public/plus.svg';

const AddTaskButton = () => {
  return (
    <div className='relative "w-[126px] h-[24px] flex justify-center items-center flex-row gap-[10px] px-[2px] py-[6px] hover:bg-[#46A381]/20 rounded-full'>
      <Plus />
      <span className='text-[#46A381] font-[Noto_Sans_JP] text-sm not-italic font-medium leading-5'>
        タスクを追加
      </span>
    </div>
  );
};

export default AddTaskButton;
