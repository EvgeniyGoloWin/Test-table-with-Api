import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const PaginationComponent = ({handlePagination}) => {

    return (
        <div className='input_pagination'>
            <Stack>
                <Pagination count={10} color='primary' onChange={handlePagination} />
            </Stack>
        </div>
    );
};
