import React, {Fragment, useState, useCallback, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { QueryCache, useQueryCache } from 'react-query';
import Button from '../../components/Button';
import Table from '../../components/Table';
import TableHead from '../../components/TableHead';
import useCoins, {getCoins} from '../../hooks/useCoins';
import CoinRow from './coinRow';
import {ChevronForward, ChevronBackward, MenuIcon} from '../../components/icons';

const initialState = {
    start: 0,
    limit: 10,
}
const  Page = () => {
    const [{start, limit}, setQueryParams] = useState(initialState);
    const {latestData, resolvedData, refetch, isFetching,  isLoading, error} = useCoins(start, limit);
    const history = useHistory();
    const cache = new QueryCache();
    const handleNextPagination = () => {
        setQueryParams((prevState) => ({
            ...prevState,
            start: Math.max(prevState.limit + 1, (prevState.start  + prevState.limit)),
        }))
    }

    useEffect(() => {
        if(latestData?.data){
            cache.prefetchQuery(['coins', start + limit, limit], getCoins)
        }
    })

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
    if(isLoading){
        return(
            <div className="coin-container">
                <div className="coin-container__wait">
                    <Loader
                        type="ThreeDots"
                        color="#00BCD4"
                        height={35}
                        width={30}

                    />
                </div>
            </div>
        )
    }
    if(error){
        return(
            <Fragment>
                <div className="coin-container">
                    <div className="coin-container__wait">
                        <Button classname={"coin-container__btn-refetch"} onClick={() => refetch & refetch()}>Please Try again</Button>
                    </div>
                </div>
            </Fragment>
        )
    }
    const {data, info} = resolvedData;
    return (
            <section className="coin-container">
                <div className="coin-container__board">
                    <div className="coin-container__header">
                        <h1>Live Cryptocurrency Prices and Coin Market Caps</h1>
                    </div>
                    <div className="coin-container__table">
                        <Table>
                            <TableHead>
                                
                                <th>Coin</th>
                                <th>&#36; Price</th>
                                <th>&#36;Market Cap</th>
                                <th>Total Supply</th>
                                <th>&#36;24h Volume</th>
                                <th>24h % Change</th>
                                <th>1h % Change</th>
                                <th><MenuIcon color="#757575" size={20}/></th>
                                
                            </TableHead>
                            <tbody className={"table__body"}>
           
        
                                {data.map((obj) => (
                                    <CoinRow history={history} key={obj.id} coin={obj}/>
                                ))}
                           </tbody>
                        </Table>
                    </div>
                    <div className="coin-container__action">
                        {start > 0 ?
                             (<Button 
                                disabled={!latestData || !latestData.data}  
                                onClick={handlePreviousPagination} 
                                classname="coin-container__action-bttn coin-container__action-bttn-1 "
                                >
                                    <span>
                                     <ChevronBackward 
                                        size={10} 
                                        color={!latestData || !latestData.data ? "#9E9E9E" : "#00BCD4" }
                                      />
                                      Previous
                                    </span>
                            </Button>): null}
                        <Button 
                            disabled={!latestData || !latestData.data || info.coins_num === data[data.length - 1].rank} 
                            onClick={handleNextPagination} 
                            classname="coin-container__action-bttn"
                        >
                                <span>
                                Next
                                <ChevronForward 
                                    size={10} 
                                    color={!latestData || !latestData.data ? "#9E9E9E" : "#00BCD4" }
                                />
                            </span>
                        </Button>
                    </div>
                </div>
            </section>
    )
}

export default Page
