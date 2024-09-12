import React from 'react';
import Link from 'next/link';

const TaskItem = ({ task }) => {
  return (
    <li>
      <Link href={`/task/${task.id}`}>
        <a>{task.title}</a>
      </Link> - {task.status} - Assigned to: {task.assignedTo}
    </li>
  );
};

export default TaskItem;
