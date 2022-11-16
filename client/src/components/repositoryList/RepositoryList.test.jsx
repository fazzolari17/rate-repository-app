import React from 'react';
import { render } from '@testing-library/react-native';
import RepositoryListContainer from './RepositoryListContainer';
import { repositories } from '../../../setupTests';
import { useNavigate } from 'react-router-native';
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';

jest.mock('react-router-native', () => ({
  ...jest.requireActual('react-router-native'),
  useNavigate: () => (jest.fn())
}))
describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', async () => {
      
      const { debug, getByText, findAllByText, findAllByAltText, getAllByRole, getAllByTestId, getByTestId, queryByText } = render(
          <RepositoryListContainer repositories={repositories} />
      );

      const button = queryByText(/open in github/i);
      expect(button).toBeNull();

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
      expect(images[0].props.source.uri).toBe('https://avatars2.githubusercontent.com/u/4060187?v=4');
      expect(images[1].props.source.uri).toBe('https://avatars1.githubusercontent.com/u/54310907?v=4');
    });
  });
});