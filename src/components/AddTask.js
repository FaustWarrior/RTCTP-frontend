import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_TASK = gql`
  mutation AddTask($title: String!, $assignedTo: String!) {
    addTask(title: $title, assignedTo: $assignedTo) {
      id
      title
      assignedTo
      status
    }
  }
`;

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [addTask] = useMutation(ADD_TASK, {
    update(cache, { data: { addTask } }) {
      cache.modify({
        fields: {
          tasks(existingTasks = []) {
            const newTaskRef = cache.writeFragment({
              data: addTask,
              fragment: gql`
                fragment NewTask on Task {
                  id
                  title
                  status
                  assignedTo
                }
              `,
            });
            return [...existingTasks, newTaskRef];
          },
        },
      });
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask({ variables: { title, assignedTo } });
    setTitle('');
    setAssignedTo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Assign To"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
