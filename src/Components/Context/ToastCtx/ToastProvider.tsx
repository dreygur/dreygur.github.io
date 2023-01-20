import React, { createContext } from 'react';
import useToast from '../../utils/Hooks/useToast';

type Props = {
    children?: React.ReactNode
}

export const toastCtx: React.Context<any> = createContext(undefined);
const ToastProvider = ({ children }: Props) => {
    const value = useToast();
    return (
        <toastCtx.Provider value={value}>
            {children}
        </toastCtx.Provider>
    );
};

export default ToastProvider;