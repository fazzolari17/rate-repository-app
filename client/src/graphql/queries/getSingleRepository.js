import { gql } from '@apollo/client';

export const GET_SINGLE_REPOSITORY = gql`
  query Query($repositoryId: ID!) {
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
      reviews {
      edges {
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