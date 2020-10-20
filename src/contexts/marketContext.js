import React from 'react';
import {useMarkets} from '../hooks/useMarkets';
import {useHistory} from 'react-router-dom';

const MarketContext = React.createContext();
MarketContext.displayName = 'MarketContext';

export const MarketProvider = ({children, coinId, coin}) => {
    // const history = useHistory()
    console.log("props context")
    const {
        data,
        error,
        isLoading,
    } = useMarkets(coinId);
    const value = {
        data,
        isLoading,
        error,
        coin,
        
    }
    return <MarketContext.Provider value={value} >{children}</MarketContext.Provider>
}

export const useMarketContext = () => {
    const context = React.useContext(MarketContext);
    if(context === undefined){
        throw new Error(`useCoinsContext must be used within MarketContext Provider` )
    }
    return context;
}