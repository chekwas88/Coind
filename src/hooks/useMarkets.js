import {useQuery} from 'react-query';
import axios from 'axios';


export const getMarkets = async (coinId) => {
    const {data} = await axios.get(`/coin/markets/?id=${coinId}`);
    return data;
}


export const useMarkets = (coinId) => {
    
    const {data, refetch, isLoading, error} = useQuery(
        ['markets'],
        () => getMarkets(coinId),
        {
            retry: {failureCount: 2}
        }
    );
        

    return {
        data,
        isLoading,
        error,
        refetch,
    }

}