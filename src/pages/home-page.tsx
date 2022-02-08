import { useQuery } from '@apollo/client';
import { GET_TASKS } from '../graphql/queries/task-queries';

const HomePage = () => {
  const { loading, data: { tasks: allTasks } = {} } = useQuery(GET_TASKS);

  console.log('TASKS:', allTasks);

  return (
    <>
      <p>HOME PAGE</p>
    </>
  );
};

export default HomePage;
