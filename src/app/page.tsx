import Title from './component/Atoms/Title/index';
import EditButton from './component/Atoms/EditButton/index';
import AddTaskButton from './component/Atoms/AddTaskButton/index';
import Checkbox from './component/Atoms/Checkbox/index';

export default function Home() {
  return (
    <>
      <Title />
      <EditButton />
      <AddTaskButton />
      <Checkbox />
    </>
  );
}
