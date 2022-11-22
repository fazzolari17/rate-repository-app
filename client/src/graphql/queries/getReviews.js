import { gql } from '@apollo/client';

export const GET_REVIEWS = gql`
  reviews(first: $first, after: $after) {
    totalCount
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        text
        rating
        createdAt
        user {
          id
          username
        }
      }
    }
  }
`