import React from 'react';
import Stores from './';

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

describe('Stores', () => {

    it('renders when no stores are found', async () => {
       renderWithProviders(<Stores />);
       expect(screen.getByText("Somehow, there are no stores!")).toBeInTheDocument();
    });

    it('renders orders when they are found', async () => {
        renderWithProviders(<Stores />, {
            preloadedState
        });

        waitFor(() => {
            expect(screen.getByText("Somehow, there are no stores!")).not.toBeInTheDocument()
        });
    })
})