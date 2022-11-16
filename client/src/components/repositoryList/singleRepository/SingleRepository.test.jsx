import { fireEvent, render, waitFor } from '@testing-library/react-native';
import SingleRepositoryContainer from './SingleRepositoryContainer';
import { repositories } from '../../../../setupTests';
import * as Linking from 'expo-linking';


describe('Single Repository', () => {
  describe('SingleRepositoryContainer', () => {
    it('renders the correct Repository Info', () => {
      const repo = repositories.edges[0].node
      const { getByText, debug, getByTestId } = render(<SingleRepositoryContainer repository={repo} />)

      expect(getByText('jaredpalmer/formik')).toBeVisible();
      expect(getByText('Build forms in React, without the tears')).toBeVisible();
      expect(getByText('TypeScript')).toBeVisible();
      expect(getByText('1619')).toBeVisible();
      expect(getByText('21856')).toBeVisible();
      expect(getByText('88')).toBeVisible();
      expect(getByText('3')).toBeVisible();
      const images = getByTestId('avatarImage');
      expect(images).toBeDefined();
      expect(images.props.source.uri).toBe('https://avatars2.githubusercontent.com/u/4060187?v=4');
      expect(getByText('Open in Github')).toBeVisible();
    });
    it('renders the correct review info', () => {
      const repo = repositories.edges[0].node;
      const { getByText, debug, getByTestId, getAllByText } = render(<SingleRepositoryContainer repository={repo} />);

      const rating = '96';
      const rating2 = '89';
      const rating3 = '100';

      const username = 'leeroyjenkins';
      const username2 = 'johndoe';
      const username3 = 'elina';

      const date = '11.09.2022';
      const text = 'Lorem ipsum dolor sit amet, per brute apeirian ei. Malis facilisis vel ex, ex vivendo signiferumque nam, nam ad natum electram constituto. Causae latine at sea, ex nec ullum ceteros, est ut dicant splendide. Omnis electram ullamcorper est ut.';
  
      expect(getByText(rating)).toBeVisible();
      expect(getByText(rating2)).toBeVisible();
      expect(getByText(rating3)).toBeVisible();

      expect(getByText(username)).toBeVisible();
      expect(getByText(username2)).toBeVisible();
      expect(getByText(username3)).toBeVisible();

      expect(getAllByText(text)).toHaveLength(3);
      expect(getAllByText(date)).toHaveLength(3);
    });
    it('opens link to github when pressed', async () => {
      const handleClick = jest.fn((url) => Linking.openURL(url));
      const repo = repositories.edges[0].node;
      const { getByText, debug, getByTestId, getAllByText } = render(<SingleRepositoryContainer repository={repo} onClick={handleClick} />);

      fireEvent.press(getByText(/open in github/i));

      await waitFor(() => {
        expect(handleClick).toHaveBeenCalledTimes(1);
        expect(handleClick).toHaveBeenCalledWith('https://github.com/jaredpalmer/formik');
      })

    })
  })
})