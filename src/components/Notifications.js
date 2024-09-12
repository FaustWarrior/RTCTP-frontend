import React from 'react';
import { gql, useSubscription } from '@apollo/client';

const NOTIFICATION_SUBSCRIPTION = gql`
  subscription OnTaskUpdated {
    taskUpdated {
      id
      title
      status
    }
  }
`;

const Notifications = () => {
  const { data, loading } = useSubscription(NOTIFICATION_SUBSCRIPTION);

  if (loading) return <p>Loading notifications...</p>;

  return (
    <div>
      <h2>Notifications</h2>
      {data && (
        <div>
          Task "{data.taskUpdated.title}" has been updated to status {data.taskUpdated.status}.
        </div>
      )}
    </div>
  );
};

export default Notifications;
