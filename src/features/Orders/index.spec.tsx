import React from 'react';
import Orders from './';

import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import { generateFullState } from '../../graphql-test-utils';

const preloadedState = generateFullState();

describe('Orders', () => {
    it('renders when no orders are found', async () => {
       renderWithProviders(<Orders />);
       expect(screen.getByText("No outgoing orders")).toBeInTheDocument();
    });

    it('renders orders when they are found', async () => {
        renderWithProviders(<Orders />, {
            preloadedState
        });

        waitFor(() => {
            expect(screen.getByText("No outgoing orders")).not.toBeInTheDocument()
        });
    })
})