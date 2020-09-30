import {usePaginatedQuery} from 'react-query';
import axios from 'axios';

export const getCoins = async (start, limit) => {
    const {data} = await axios.get(`/tickers/?start=${start}&limit=${limit}`);
    return data;
}

const useCoins = (start, limit) => {
    return usePaginatedQuery(['coins', start, limit],() => getCoins(start, limit));
}
export default useCoins;