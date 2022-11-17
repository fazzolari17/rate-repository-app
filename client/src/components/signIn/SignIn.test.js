import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInForm from './SignInForm';
import { act } from 'react-dom/test-utils';


describe('Sign In Form', () => {
  it('sends correct information when submit button is clicked', async () => {
    const handleSubmit = jest.fn((values) => values);

    const { getByPlaceholderText, getByText, getByLabelText, debug } = render(<SignInForm onSubmit={handleSubmit} />);

      fireEvent.changeText(getByPlaceholderText(/username/i), 'kalle');
      fireEvent.changeText(getByPlaceholderText(/password/i), 'password');
      fireEvent.press(getByText('Sign in'));
 await act(async () => {})
 
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledTimes(1),
      expect(handleSubmit.mock.calls[0][0]).toEqual({ username: 'kalle', password: 'password' }),
      // expect(handleSubmit).toHaveBeenCalledWith({ username: 'kalle', password: 'password' }),
    );


  });
});