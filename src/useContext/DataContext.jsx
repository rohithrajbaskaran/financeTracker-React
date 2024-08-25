import React, { useEffect, createContext, useState } from "react";

export const DataContext = createContext();


export const DataContextProvider = ({children}) => {
    const [Data, setData] = useState([])
    const [totalBalance, setTotalBalance] = useState(0);

    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const savedData = localStorage.getItem('expensesIncomeData');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('expensesIncomeData', JSON.stringify(Data));
    }, [Data]);
    

    useEffect(() => {
        const total = Data.reduce((accumulator, item) => {
            const amount = Number(item.eiAmount);
            return accumulator + (isNaN(amount) ? 0 : amount); 
        }, 0);
        setTotalBalance(total);
    }, [Data]);

    return (
        <DataContext.Provider value={{Data, setData, totalBalance, showAlert, setShowAlert}}>
            {children}
        </DataContext.Provider>
    )
}
