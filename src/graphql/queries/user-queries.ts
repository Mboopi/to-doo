import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsers {
    users {
      email
      created_at
      first_name
      last_name
      updated_at
      user_id
    }
  }
`;
