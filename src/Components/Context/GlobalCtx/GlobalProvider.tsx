/* @ts-nocheck */
import React, { createContext, useContext, useEffect, useState } from 'react';


export const globalCtx = createContext<any>({} as any);
const GlobalProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageCount, setPageCount] = useState(1);
    useEffect(() => {
        try {
            setIsLoading(true);
            fetch('https://api.github.com/users/dreygur/repos')
                .then(response => response.json())
                .then((res) => {
                    setProjects(res);
                    setPageCount(Math.ceil(res?.length / 10));
                })
                .finally(() => setIsLoading(false));
        }
        catch (err) { console.log(err) }
    }, []);

    return (
        <globalCtx.Provider value={{ projects, pageCount, isLoading }}>
            {children}
        </globalCtx.Provider>
    );
};

export default GlobalProvider;
export const useGlobalCtx = () => useContext(globalCtx);