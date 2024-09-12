import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import Layout from '../../components/Layout';

const GET_TASK = gql`
  query GetTask($id: ID!) {
    task(id: $id) {
      id
      title
      description
      status
      assignedTo
    }
  }
`;

export default function TaskPage() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_TASK, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Layout>
      <h1>{data.task.title}</h1>
      <p>{data.task.description}</p>
      <p>Status: {data.task.status}</p>
      <p>Assigned to: {data.task.assignedTo}</p>
    </Layout>
  );
}
