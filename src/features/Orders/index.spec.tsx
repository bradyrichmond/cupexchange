import React from 'react';
import Orders from './';

import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import { Order, User } from '../../models';
import { Trip } from '../../models';
import { Store } from '../../models';

describe('Orders', () => {
    it('renders when no orders are found', async () => {
       renderWithProviders(<Orders />);
       expect(screen.getByText("No outgoing orders")).toBeInTheDocument()
    });

    it('renders orders when they are found', async () => {
        renderWithProviders(<Orders />, {
            preloadedState: {
                user: {
                    userData: {
                        fbUsername: 'facebook_12345789',
                        id: '1',
                        first_name: "Test",
                        last_name: "User",
                        email: "testuser@cupexchange.com"
                    }
                },
                orders: {
                    incomingOrders: [new Order({
                        numberOfCups: 3,
                        total: 64,
                        orderBuyerId: '2',
                        orderShipperId: '1',
                        tracking: [],
                        orderTripId: '123456789',
                        buyer: new User({
                            fbUsername: 'facebook_123456789',
                            first_name: 'Test',
                            last_name: 'User',
                            email: 'testuser@cupexchange.com'
                        }),
                        shipper: new User({
                            fbUsername: 'facebook_123456789',
                            first_name: 'Test',
                            last_name: 'User',
                            email: 'testuser@cupexchange.com'
                        }),
                        trip: new Trip({
                            store: new Store({
                                name: 'Test Store',
                                district: 'Test',
                                city: 'Test',
                                storeInventoryId: '12345',
                                lastUpdateBy: new User({
                                    fbUsername: 'facebook_123456789',
                                    first_name: 'Test',
                                    last_name: 'User',
                                    email: 'testuser@cupexchange.com'
                                }),
                                storeLastUpdateById: '12345679'
                            }),
                            cupPrice: '18',
                            shippingPrice: '10',
                            shipper: new User({
                                fbUsername: 'facebook_123456789',
                                first_name: 'Test',
                                last_name: 'User',
                                email: 'testuser@cupexchange.com'
                            }),
                            orderExpiration: Date.now(),
                            tripStoreId: '12345678',
                            tripShipperId: '123456'
                        })
                    })],
                    outgoingOrders: [new Order({
                        numberOfCups: 3,
                        total: 64,
                        orderBuyerId: '2',
                        orderShipperId: '1',
                        tracking: [],
                        orderTripId: '123456789',
                        buyer: new User({
                            fbUsername: 'facebook_123456789',
                            first_name: 'Test',
                            last_name: 'User',
                            email: 'testuser@cupexchange.com'
                        }),
                        shipper: new User({
                            fbUsername: 'facebook_123456789',
                            first_name: 'Test',
                            last_name: 'User',
                            email: 'testuser@cupexchange.com'
                        }),
                        trip: new Trip({
                            store: new Store({
                                name: 'Test Store',
                                district: 'Test',
                                city: 'Test',
                                storeInventoryId: '12345',
                                lastUpdateBy: new User({
                                    fbUsername: 'facebook_123456789',
                                    first_name: 'Test',
                                    last_name: 'User',
                                    email: 'testuser@cupexchange.com'
                                }),
                                storeLastUpdateById: '12345679'
                            }),
                            cupPrice: '18',
                            shippingPrice: '10',
                            shipper: new User({
                                fbUsername: 'facebook_123456789',
                                first_name: 'Test',
                                last_name: 'User',
                                email: 'testuser@cupexchange.com'
                            }),
                            orderExpiration: Date.now(),
                            tripStoreId: '12345678',
                            tripShipperId: '123456'
                        })
                    })],
                    loading: false
                }
            }
        });
        waitFor(() => {
            expect(screen.getByText("Test User")).toBeInTheDocument();
        });
    })
})