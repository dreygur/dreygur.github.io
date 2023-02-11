import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import useToastCtx from '../../../Context/ToastCtx/useToastCtx';
import Socials from '../../../Shared/Socials.js/Socials';
import './Contact.css';


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
        <section className='container mx-auto'>
            <div className='mt-28 lg:mt-60'>
                <h1 className='md:block text-4xl font-extrabold text-center text-white md:pb-8 pb-16 tracking-widest ml-44' style={{ fontFamily: 'Pattaya' }}>Contact Me</h1>
                <div className='contact-container'>
                    <aside className='hidden lg:block md:hidden lg:col-span-1'>
                        <h1 style={{ fontFamily: 'Pattaya' }} className='text-white font-bolder text-7xl  tracking-wider'>Contact</h1>
                    </aside>
                    <div className='mt-5 ml-5'>
                        <Socials />
                    </div>
                    <div className='px-10'>
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
                </div>
            </div>

        </section>

    );
};

export default Contact; 