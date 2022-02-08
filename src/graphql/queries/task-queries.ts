import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  query getTasks {
    tasks {
      begin_time
      completed
      created_at
      date
      description
      duration
      name
      task_id
    }
  }
`;
