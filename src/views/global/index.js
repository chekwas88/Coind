import React, {useCallback} from 'react';
import Loader from 'react-loader-spinner';
import useGlobal from '../../hooks/useGlobal';
import General from '../../components/General';
import axios from 'axios';

const GlobalBar = () => {
    const getGlobal = useCallback(async () => {
        const {data} = await axios.get('/global');
        return data;
    }, [])
    
    const {data, isLoading, error} = useGlobal(getGlobal);
    if(isLoading){
        return (
            
            <div className="general">
                <Loader
                    type="ThreeDots"
                    color="#00BCD4"
                    height={35}
                    width={30}
                />
            </div>
        );
    }
    if(error){
        console.log(error);
        return null;
        
    }
    return(
        
        < General data={data[0]}/>
    )
}

export default GlobalBar;