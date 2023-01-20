import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';

const Contact = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState([{ email: String, name: String, message: String }]);

    const handleSubmit = (event: React.FormEvent<HTMLElement>): void => {
        try {
            setIsLoading(true);

        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <section className='container min-h-[80vh]  grid grid-cols-5 mx-auto mt-60'>
            <div className='hidden lg:block md:hidden col-span-1 '>
                <h1 style={{ fontFamily: 'Pattaya' }} className='text-white font-bolder text-7xl absolute rotate-[270deg] top-64'>Contact</h1>
            </div>
            <div className='col-span-4'>
                <form>
                    <div className='my-4'>
                        <TextField style={{ backgroundColor: '#244562' }} fullWidth label="Name" id="outlined-size-normal" />
                    </div>
                    <div className='my-4'>
                        <TextField style={{ backgroundColor: '#244562' }} fullWidth label="E-mail" id="outlined-size-normal" />
                    </div>
                    <div className='my-4'>
                        <TextField multiline={true} style={{ backgroundColor: '#244562' }} rows={10} fullWidth label="Message" id="outlined-size-normal" />
                    </div>
                    <Button sx={{ backgroundColor: '#244562', color: 'white', fontWeight: 'bold' }} fullWidth variant="contained" endIcon={<SendIcon sx={{ color: 'white' }} />}>
                        Send
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default Contact; 