import { createContext, useContext, useEffect, useState } from 'react'
import FetchData from '../FetchApi/RapidApi';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [loading, setloading] = useState(false);
    const [data, setdata] = useState(null);
    const [value, setvalue] = useState("New");

    useEffect(() => {
        FetchAllData(value);
    }, [value]);

    const FetchAllData = async (value) => {
        setloading(true);

        await FetchData(`search/?q=${value}`)
            .then(({ contents }) => {
                setdata(contents);
                setloading(false);
            })
            .catch((err) => {
                console.log("FetchAllData Error :", err.message);
            })
    }

    return (
        <AuthContext.Provider value={{ loading, data, setvalue }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UseAuth = () => useContext(AuthContext);