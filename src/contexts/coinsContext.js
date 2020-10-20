import React from 'react';
import {useCoins} from '../hooks/useCoins';

const CoinsContext = React.createContext();
CoinsContext.displayName = 'coinsContext';

export const CoinsProvider = ({children}) => {
    const {
        latestData,
        resolvedData,
        isLoading,
        error,
        start,
        refetch,
        handleNextPagination,
        handlePreviousPagination
    } = useCoins();
    const value = {
        latestData,
        resolvedData,
        isLoading,
        error,
        start,
        refetch,
        handleNextPagination,
        handlePreviousPagination
    }
    return <CoinsContext.Provider value={value} >{children}</CoinsContext.Provider>
}

export const useCoinsContext = () => {
    const context = React.useContext(CoinsContext);
    if(context === undefined){
        throw new Error(`useCoinsContext must be used within CoinsContext Provider` )
    }
    return context;
}