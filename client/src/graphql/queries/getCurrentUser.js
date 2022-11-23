import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      username
      id
      reviews @include(if: $includeReviews) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        edges {
          node {
            id
            createdAt
            rating
            text
            user {
              id
              username
            }
            userId
          }
        }
      }
    }
  }
`