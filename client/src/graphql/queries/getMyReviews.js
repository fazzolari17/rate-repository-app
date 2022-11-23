import { gql } from '@apollo/client';

export const GET_MY_REVIEWS = gql`
  query Query {
  me {
    reviewCount
    reviews {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        node {
          rating
          id
          createdAt
          text
          user {
            id
            username
          }
          userId
        }
      }
    }
    username
  }
}
`