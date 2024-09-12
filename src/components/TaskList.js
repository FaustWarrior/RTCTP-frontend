import React from 'react';
import TaskItem from './TaskItem';
import { gql, useQuery } from '@apollo/client';

const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      title
      status
      assignedTo
    }
  }
`;

const TaskList = () => {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Tasks</h2>
      <ul className="card">
        {data.tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
