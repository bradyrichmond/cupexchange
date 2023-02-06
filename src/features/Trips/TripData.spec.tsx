import React from 'react';
import TripData from './TripData';

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

describe('Trips', () => {

    it('renders when trip inventory', async () => {
       renderWithProviders(<TripData />);
       expect(screen.getByText("No inventory data")).toBeInTheDocument();
    });

    it('renders trip when trip inventory is found', async () => {
        renderWithProviders(<TripData />, {
            preloadedState
        });

        waitFor(() => {
            expect(screen.getByText("No inventory data")).not.toBeInTheDocument()
        });
    })
})