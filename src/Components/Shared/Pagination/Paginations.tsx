import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';


const Paginations = () => {
    const [page, setPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    return (
        <Stack spacing={2}>
            <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
    );
};

export default Paginations;