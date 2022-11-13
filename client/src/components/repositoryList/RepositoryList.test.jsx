import React from 'react';
import { render, screen } from '@testing-library/react-native';
import RepositoryListContainer from './RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', async () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 4,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      const { debug, getByText, findAllByText, findAllByAltText, getAllByRole, getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );
      
      // Dynamic info user 1
      expect(getByText('jaredpalmer/formik')).toBeVisible();
      expect(getByText('Build forms in React, without the tears')).toBeVisible();
      expect(getByText('TypeScript')).toBeVisible();
      expect(getByText('1619')).toBeVisible();
      expect(getByText('21856')).toBeVisible();
      expect(getByText('88')).toBeVisible();
      expect(getByText('3')).toBeVisible();

      // Dynamic info user 2
      expect(getByText('async-library/react-async')).toBeVisible();
      expect(getByText('Flexible promise-based React data loader')).toBeVisible();
      expect(getByText('JavaScript')).toBeVisible();
      expect(getByText('69')).toBeVisible();
      expect(getByText('1760')).toBeVisible();
      expect(getByText('72')).toBeVisible();
      expect(getByText('4')).toBeVisible();

      // Checks the static text that should always be the same on the page
      expect(await findAllByText('Stars')).toHaveLength(2);
      expect(await findAllByText('Forks')).toHaveLength(2);
      expect(await findAllByText('Reviews')).toHaveLength(2);
      expect(await findAllByText('Ratings')).toHaveLength(2);

      // Test that the Images render and are the correct url 
      const images = await getAllByTestId('avatarImage');
      expect(images).toHaveLength(2);
      expect(images[0].props.source.uri).toBe('https://avatars2.githubusercontent.com/u/4060187?v=4')
      expect(images[1].props.source.uri).toBe('https://avatars1.githubusercontent.com/u/54310907?v=4')
      console.log(images[0].props);

      // // Add your test code here
    });
  });
});