import React from 'react';
import StoreData from './StoreData';

import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';

import { generateFullState } from '../../graphql-test-utils';
import userEvent from '@testing-library/user-event';

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

describe('Store Data', () => {

    it('displays test store data', async () => {
        renderWithProviders(<StoreData />, {
            preloadedState
        });
        waitFor(() => {
            expect(screen.getByText("Test Store")).toBeInTheDocument()
        });
    });

    it('opens comments modal', async () => {
        renderWithProviders(<StoreData />, {
            preloadedState
        });

        waitFor(() => {
            const commentIcon = screen.getAllByTestId('show-messages')[0];
            userEvent.click(commentIcon);
        })
        waitFor(() => {
            expect(screen.getByText('This is a comment')).toBeInTheDocument();
        })
    })
})