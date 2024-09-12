import Layout from '../components/Layout';
import TaskList from '../components/TaskList';
import ProjectList from '../components/ProjectList';
import AddTask from '../components/AddTask';
import Notifications from '../components/Notifications';

export default function Home() {
  return (
    <Layout>
      <Notifications />
      <AddTask />
      <TaskList />
      <ProjectList />
    </Layout>
  );
}
