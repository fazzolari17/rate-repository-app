import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput) {
  createUser(user: $user) {
    createdAt
    id
    reviewCount
    username
  }
}
`