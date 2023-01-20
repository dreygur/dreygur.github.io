import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import useToastCtx from '../../Context/ToastCtx/useToastCtx';

const Toast = () => {
    const { toast, handleClose, TransitionUp } = useToastCtx();
    return (
        < Snackbar open={toast.open} autoHideDuration={6000} onClose={handleClose} TransitionComponent={TransitionUp} >
            <Alert severity={toast.variant}>{toast.message}</Alert>
        </Snackbar >

    );
};

export default Toast;