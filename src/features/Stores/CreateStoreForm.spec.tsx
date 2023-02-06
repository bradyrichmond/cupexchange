import React from 'react';
import CreateStoreForm from './CreateStoreForm';

import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';

describe('Create Store Form', () => {

    it('renders createStoreForm', async () => {
        renderWithProviders(<CreateStoreForm close={jest.fn()} />);
        waitFor(() => {
            expect(screen.getByText("Create Store")).toBeInTheDocument()
        });
    });
})