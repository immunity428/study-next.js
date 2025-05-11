'use client';

import React, { useState } from 'react';
import Checkbox from '../../Atoms/Checkbox';
import Input from '../../Atoms/Input';
import EditButton from '../../Atoms/EditButton';

type TaskProps = {
  onTaskNameChange: (newName: string) => void;
  onTaskComplete: () => void;
  taskName: string;
  defaultEditing: boolean;
};

const Task: React.FC<TaskProps> = ({
  onTaskNameChange,
  onTaskComplete,
  taskName,
  defaultEditing,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(defaultEditing);

  const onEditComplete = (value: string) => {
    onTaskNameChange(value);
    setIsEditing(false); // 編集完了後に表示モードに戻す
  };

  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <div className='flex gap-2 p-1'>
      <div className='flex items-center'>
        <Checkbox onClick={onTaskComplete} />
      </div>

      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <div className='flex justify-between w-full'>
          <div className='text-gray-400 text-sm font-medium mr-2 w-full leading-5 truncate'>
            {taskName}
          </div>
          <div className='ml-auto'>
            <EditButton onClick={onEditButtonClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
