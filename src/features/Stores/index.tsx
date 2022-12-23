import React from 'react';
import { Box } from '@mui/material';
import MaterialTable from "material-table";

const Stores = () => {


    return (
        <Box>
            <MaterialTable
                columns={[
                    { title: "Store Name", field: "storeName" },
                    { title: "Last Update", field: "lastUpdated" }
                ]}
                data={[]}
                title="Stores"
            />
        </Box>
    )
}

export default Stores;