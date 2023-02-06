import React from 'react';
import CreateTripForm from './CreateTripForm';

import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import { generateFullState } from '../../graphql-test-utils';

const preloadedState = generateFullState();

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
   useNavigate: () => mockUseNavigate,
}));

const mockDispatchFn = jest.fn();
jest.mock('../../hooks', () => ({
    ...jest.requireActual('../../hooks'),
    useAppDispatch: () => mockDispatchFn
}))

describe('Create Trip Form', () => {

    it('renders form', async () => {
        renderWithProviders(<CreateTripForm close={jest.fn()} />);
        waitFor(() => {
            expect(screen.getByText("Create Trip")).toBeInTheDocument();
        });
    });

})