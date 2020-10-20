import React from 'react';
import {usePaginatedQuery, QueryCache} from 'react-query';
import axios from 'axios';

const initialState = {
    start: 0,
    limit: 10,
}

export const getCoins = async (start, limit) => {
    const {data} = await axios.get(`/tickers/?start=${start}&limit=${limit}`);
    return data;
}


export const useCoins = () => {
    const [{start, limit}, setQueryParams] = React.useState(initialState);

    const {latestData, resolvedData, refetch, isLoading, error} = usePaginatedQuery(
        ['coins', start, limit],
        () => getCoins(start, limit),
        {
            retry: {failureCount: 2}
        }
    );
    const cache = new QueryCache();
    React.useEffect(() => {
        if(latestData?.data){
            cache.prefetchQuery(['coins', start + limit, limit], getCoins)
        }
    })
    const handleNextPagination = () => {
        setQueryParams((prevState) => ({
            ...prevState,
            start: Math.max(prevState.limit + 1, (prevState.start  + prevState.limit)),
        }))
    }
    const handlePreviousPagination = () => {
        setQueryParams((prevState) => ({
            ...prevState,
            start: handlepreviousVal(prevState.start, prevState.limit),
        }))
    }
   const  handlepreviousVal = (startVal, limitval) => {
        const result = startVal - limitval;
        return result <= 1 ? 0 : result;
    }

    return {
        latestData,
        resolvedData,
        isLoading,
        error,
        start,
        refetch,
        handleNextPagination,
        handlePreviousPagination

    }

}