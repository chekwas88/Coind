import {useQuery} from 'react-query';
import axios from 'axios';

const getGlobal = async () => {
    const {data} = await axios.get('/global');
    return data;
}

const useGlobal = () => {
    return useQuery('global', getGlobal, {
        retry: {failureCount: 2}
        
    });
}
export default useGlobal;