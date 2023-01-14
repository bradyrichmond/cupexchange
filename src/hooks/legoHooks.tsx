import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { getLego } from '../graphql/queries';
import { Lego } from '../models';

let initialLegoDataState: Lego | undefined;

export const useLegoData = (id: string) => {
    const [legoData, setLegoData] = useState(initialLegoDataState);
    
    useEffect(() => {
        const getLegoData = async () => {
            const initialLegoData = await (API.graphql(graphqlOperation(getLego, { id })) as Promise<any>);
            setLegoData(initialLegoData.data.getLego);
        }

        getLegoData();
    }, [])

    return legoData;
}
