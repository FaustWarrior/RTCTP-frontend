import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import Layout from '../../components/Layout';

const GET_PROJECT = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      id
      name
      tasks {
        id
        title
        status
      }
    }
  }
`;

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Layout>
      <h1>{data.project.name}</h1>
      <ul>
        {data.project.tasks.map((task) => (
          <li key={task.id}>{task.title} - {task.status}</li>
        ))}
      </ul>
    </Layout>
  );
}
