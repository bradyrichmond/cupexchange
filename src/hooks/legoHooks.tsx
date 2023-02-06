import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Lego } from '../models';

let initialLegoDataState: Lego | undefined;

export const useLegoData = (id: string) => {
    const [legoData, setLegoData] = useState(initialLegoDataState);
    
    useEffect(() => {
        const getLegoData = async () => {
            const initialLegoData = await DataStore.query(Lego, id);
            setLegoData(initialLegoData);
        }

        getLegoData();
    }, [id])

    return legoData;
}
