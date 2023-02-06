import React from 'react';
import UserData from './UserData';

import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';

const mockDispatchFn = jest.fn();
jest.mock('../../hooks', () => ({
    ...jest.requireActual('../../hooks'),
    useAppDispatch: () => mockDispatchFn
}))

describe('User Data', () => {
    it('renders ', async () => {
       renderWithProviders(<UserData />);
       expect(screen.getByText("User Profile")).toBeInTheDocument();
    });
})