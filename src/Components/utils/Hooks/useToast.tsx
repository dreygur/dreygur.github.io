import { Slide, SlideProps } from "@mui/material";
import { useState } from "react";

interface ToastProps {
    open?: boolean;
    variant?: string;
    message?: string;
};

type TransitionProps = Omit<SlideProps, 'direction'>;

const useToast = () => {
    const [toast, setToast] = useState<ToastProps>({ open: false, variant: '', message: '' });

    const handleClick = () => {
        toast.open = true
        setToast(toast);
    };

    const handleClose = (event: React.MouseEvent, reason: any) => {
        if (reason === 'clickaway') {
            return;
        }
        toast.open = false;
        setToast({ ...toast, open: false });
    };

    function TransitionUp(props: TransitionProps) {
        return <Slide {...props} direction="up" />;
    }

    return {
        toast,
        setToast,
        handleClick,
        handleClose,
        TransitionUp
    }

}

export default useToast;