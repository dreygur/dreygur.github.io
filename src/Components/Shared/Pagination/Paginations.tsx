/* @ts-nocheck */
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';

const Paginations = ({ projects }) => {
    const [page, setPage] = useState(1);
    const [dataCount, setDataCount] = useState(10);
    const [pageCount, setPageCount] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        setPageCount(Math.ceil(projects?.length! / dataCount));

    }, [])

    const handleData = () => {

    };
    return (
        <Stack spacing={2}>
            <Pagination count={pageCount} page={1} onChange={handleChange} />
        </Stack>
    );
};

export default Paginations;