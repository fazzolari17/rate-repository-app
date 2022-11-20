import { fireEvent, render, waitFor } from '@testing-library/react-native';
import SignUpForm from './SignUpForm';

const handleSubmit = jest.fn();

describe('Sign Up Form', () => {
  describe('SignUpForm', () => {
    it('renders to the screen with correct content', () => {
      const { getByText, getByPlaceholderText, debug, getAllByPlaceholderText } = render(<SignUpForm handleSubmit={handleSubmit} />);
      const password = getAllByPlaceholderText(/password/i)[0];

      expect(getByPlaceholderText(/username/i)).toBeVisible();
      expect(password).toBeVisible();
      expect(getByPlaceholderText(/confirm\spassword/i)).toBeVisible();
      expect(getByText(/sign\sup/i)).toBeVisible();
    });
    describe('displays the correct errors', () => {
      it('username displays correct error in red', async () => {
        const { getByText, getByPlaceholderText, debug, getAllByPlaceholderText } = render(<SignUpForm handleSubmit={handleSubmit} />);
        const password = getAllByPlaceholderText(/password/i)[0];

        fireEvent.changeText(getByPlaceholderText(/username/i), '');
        fireEvent.press(getByText(/sign\sup/i));

        await waitFor(() => {
          expect(handleSubmit).toHaveBeenCalledTimes(0);
          expect(getByText('username is required')).toHaveStyle('color', '#24292e');
        })
      });
      it('password displays correct errors in red', async () => {
        const { getByText, getByPlaceholderText, getAllByPlaceholderText } = render(<SignUpForm handleSubmit={handleSubmit} />);
        const password = getAllByPlaceholderText(/password/i)[0];
        const confirmPassword = getAllByPlaceholderText(/password/i)[1];
        
        fireEvent.changeText(password, 'a');
        fireEvent.press(getByText(/sign\sup/i));

        await waitFor(() => {
          expect(handleSubmit).toHaveBeenCalledTimes(0);
          expect(getByText('password must contain at least 1 uppercase letter')).toBeVisible();
          expect(getByText('password must contain at least 1 uppercase letter')).toHaveStyle('color', '#24292e');
        });

        fireEvent.changeText(password, 'A');
        fireEvent.press(getByText(/sign\sup/i));

        await waitFor(() => {
          expect(handleSubmit).toHaveBeenCalledTimes(0);
          expect(getByText('password must contain at least 1 lowercase letter')).toHaveStyle('color', '#24292e');
          expect(getByText('password must contain at least 1 lowercase letter')).toBeVisible();
        });

        fireEvent.changeText(password, 'Aa');
        fireEvent.press(getByText(/sign\sup/i));

        await waitFor(() => {
          expect(handleSubmit).toHaveBeenCalledTimes(0);
          expect(getByText('password must contain at least 1 number')).toHaveStyle('color', '#24292e');
          expect(getByText('password must contain at least 1 number')).toBeVisible();
        });

        fireEvent.changeText(password, 'Aa1');
        fireEvent.press(getByText(/sign\sup/i));

        await waitFor(() => {
          expect(handleSubmit).toHaveBeenCalledTimes(0);
          expect(getByText('password must contain at least 1 symbol')).toHaveStyle('color', '#24292e');
          expect(getByText('password must contain at least 1 symbol')).toBeVisible();
        });

        fireEvent.changeText(password, 'Aa1+');
        fireEvent.press(getByText(/sign\sup/i));

        await waitFor(() => {
          expect(handleSubmit).toHaveBeenCalledTimes(0);
          expect(getByText('password must be between 5 and 50 characters')).toHaveStyle('color', '#24292e');
          expect(getByText('password must be between 5 and 50 characters')).toBeVisible();
        });

        fireEvent.changeText(password, 'Aa1+a')
        fireEvent.changeText(confirmPassword, 'a')
        fireEvent.press(getByText(/sign\sup/i));

        await waitFor(() => {
          expect(handleSubmit).toHaveBeenCalledTimes(0);
          expect(getByText('passwords must match')).toHaveStyle('color', '#24292e');
          expect(getByText('passwords must match')).toBeVisible();
        });
      });
    });
    it('send the correct information when filled put and submitted', async () => {

      const { getByText, getByPlaceholderText, debug, getAllByPlaceholderText, queryByText } = render(<SignUpForm handleSubmit={handleSubmit} />);
      const password = getAllByPlaceholderText(/password/i)[0];
        
      fireEvent.changeText(getByPlaceholderText(/username/i), 'Giuseppe');
      fireEvent.changeText(password, 'HelloFresh123+');
      fireEvent.changeText(getByPlaceholderText(/confirm\spassword/i), 'HelloFresh123+');
      fireEvent.press(getByText(/sign\sup/i));
      
      await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalledTimes(1);
        expect(handleSubmit.mock.calls[0][0]).toEqual({
          username: 'Giuseppe',
          password: 'HelloFresh123+',
          passwordConfirmation: 'HelloFresh123+',
        })
        expect(queryByText(/username\sis\srequired/i)).toBeNull();

      })
    })
  })
})