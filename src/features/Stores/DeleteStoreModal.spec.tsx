import React from 'react';
import DeleteStoreModal from './DeleteStoreModal';

import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';

describe('Delete Store Modal', () => {

    it('renders with store name', async () => {
       renderWithProviders(<DeleteStoreModal confirm={jest.fn()} cancel={jest.fn()} storeName="Test Store" />);
       expect(screen.getByText("Are you sure you want to delete Test Store")).toBeInTheDocument();
    });
})