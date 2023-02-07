import React from 'react';
import SignUp from './';

import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';

jest.mock("react-router", () => ({
    ...jest.requireActual("react-router"),
    useLocation: () => ({
      state: { email: 'test_email@cupexchange.com' }
    })
  }));

describe('signUp', () => {
    it('renders with email from location state', async () => {
       renderWithProviders(<SignUp />);
       expect(screen.getByText('Complete Sign up')).toBeInTheDocument();
       expect(screen.getByText('test_email@cupexchange.com')).toBeInTheDocument();
    });
})  