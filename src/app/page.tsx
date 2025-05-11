'use client';

import Task from './component/Molecules/Task/index';

export default function Home() {
  return (
    <>
      <Task
        onTaskNameChange={(name) => console.log('Task name changed:', name)}
        onTaskComplete={() => console.log('Task completed')}
        taskName='Sample Task'
        defaultEditing={false}
      />
    </>
  );
}
