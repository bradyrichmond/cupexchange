import React from 'react';
import CommentsContent from './';

import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import { generateComments, generateFullState } from '../../graphql-test-utils';

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

const generatedComments = generateComments(10);

describe('Comments', () => {

    it('renders when no comments are found', async () => {
       renderWithProviders(<CommentsContent comments={[]} />);
       expect(screen.getByText("No comments")).toBeInTheDocument();
    });

    it('renders orders when they are found', async () => {
        renderWithProviders(<CommentsContent comments={generatedComments} />, {
            preloadedState
        });

        expect(screen.queryAllByText("This is a comment")).toHaveLength(10);
    })
})