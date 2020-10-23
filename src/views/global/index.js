import React from 'react';
import Loader from 'react-loader-spinner';
import useGlobal from '../../hooks/useGlobal';
import General from '../../components/General';

const GlobalBar = () => {
    
    
    const {data, isLoading, error} = useGlobal();
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
        return null;        
    }
    return(
        <>
        {data ? (
            < General data={data[0]}/>
        ): null}
            
        </>
    )
}

export default GlobalBar;