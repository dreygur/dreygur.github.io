import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import useToastCtx from '../../../Context/ToastCtx/useToastCtx';

interface DataType {
    email: string;
    name: string;
    message: string;
};

let resetForm = document.getElementById('contact') as HTMLFormElement;


const Contact = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<DataType>({ email: '', name: '', message: '' });
    const { setToast } = useToastCtx();

    const handleSubmit = (event: React.FormEvent<HTMLElement>): void => {
        try {
            event.preventDefault();
            setIsLoading(true);

            let template = {
                to_name: 'Rakibul Yeasin',
                from_name: data.name,
                message: data.message,
                from_email: data.email
            };

            let serviceId: string = process.env.REACT_APP_SERVICE_ID as string;
            let templateId: string = process.env.REACT_APP_TEMPLATE_ID as string;
            let publicKey: string = process.env.REACT_APP_PUBLIC_KEY as string;

            emailjs.send(serviceId, templateId, template, publicKey)
                .then((response) => {
                    if (response.status === 200) { setToast({ open: true, variant: 'success', message: 'Message Sent Successfully' }); }
                }, (err) => {
                    console.log('FAILED...', err);
                    setToast({ open: true, variant: 'error', message: 'Something Went Wrong' });
                })
                .catch((err) => {
                    console.log(err);
                    setToast({ open: true, variant: 'error', message: 'Something Went Wrong' });

                })
                .finally(() => {
                    setIsLoading(false);
                    setData({ email: '', name: '', message: '' });
                    resetForm.reset();
                });

        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <section className='container  lg:grid lg:grid-cols-4 lg:pl-40 mx-auto mt-28 lg:mt-60 mb-10'>
            <h1 className='lg:hidden block md:block text-4xl font-extrabold text-center text-white md:pb-8 pb-16' style={{ fontFamily: 'Pattaya' }}>Contact Me</h1>
            <div className='hidden lg:block md:hidden lg:col-span-1'>
                <h1 style={{ fontFamily: 'Pattaya' }} className='text-white font-bolder text-7xl absolute rotate-[270deg] tracking-wider top-[340px] left-[400px]'>Contact</h1>
            </div>
            <div className='lg:col-span-2 px-10'>
                <form onSubmit={handleSubmit} id='contact'>
                    <div className='my-4'>
                        <TextField value={data.name} autoComplete='off' required onChange={(event) => setData({ ...data, name: event.target.value })} style={{ backgroundColor: '#244562' }} fullWidth label="Name" id="outlined-size-normal" />
                    </div>
                    <div className='my-4'>
                        <TextField value={data.email} autoComplete='off' required onChange={(event) => setData({ ...data, email: event.target.value })} style={{ backgroundColor: '#244562' }} fullWidth label="E-Mail" id="outlined-size-normal" />
                    </div>
                    <div className='my-4'>
                        <TextField value={data.message} autoComplete='off' required onChange={(event) => setData({ ...data, message: event.target.value })} multiline={true} style={{ backgroundColor: '#244562' }} rows={10} fullWidth label="Message" id="outlined-size-normal" />
                    </div>
                    <Button type='submit' sx={{ backgroundColor: '#244562', color: 'white', fontWeight: 'bold' }} fullWidth variant="contained" endIcon={!isLoading ? <SendIcon sx={{ color: 'white' }} /> : <></>}>
                        {isLoading ? 'Sending ...' : 'Send'}
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default Contact; 