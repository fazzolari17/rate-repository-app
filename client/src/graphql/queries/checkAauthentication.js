import { gql } from '@apollo/client';

export const CHECK_AUTHENTICATION = gql`
  query {
    me {
      id
      username
    }
  }
`