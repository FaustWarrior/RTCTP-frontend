import React from 'react';
import Link from 'next/link';

const ProjectItem = ({ project }) => {
  return (
    <li>
      <Link href={`/project/${project.id}`}>
        <a>{project.name}</a>
      </Link>
    </li>
  );
};

export default ProjectItem;
