import React from 'react';
import User from './';

import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';

const mockDispatchFn = jest.fn();
jest.mock('../../hooks', () => ({
    ...jest.requireActual('../../hooks'),
    useAppDispatch: () => mockDispatchFn
}))


describe('User', () => {
    it('renders ', async () => {
       renderWithProviders(<User />);
       expect(screen.getByText("User Management")).toBeInTheDocument();
    });
})