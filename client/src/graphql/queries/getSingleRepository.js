import { gql } from '@apollo/client';

export const GET_SINGLE_REPOSITORY = gql`
  query Query($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      id
      fullName
      url
      description
      language
      forksCount
      name
      ownerAvatarUrl
      reviewCount
      ratingAverage
      stargazersCount
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
    }
  }
`