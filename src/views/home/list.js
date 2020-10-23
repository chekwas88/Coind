import React from 'react';
import Loader from 'react-loader-spinner';
import Button from '../../components/Button';
import Table from '../../components/Table';
import TableHead from '../../components/TableHead';
import CoinRow from './coinRow';
import {ChevronForward, ChevronBackward, MenuIcon} from '../../components/icons';
import {useCoinsContext, CoinsProvider} from '../../contexts/coinsContext';

const Loading = () => {
    const {isLoading} = useCoinsContext();
    return <>
        {isLoading ? (
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
        ): null}
    </>   
}
const ErrorView = () => {
    const {error, refetch} = useCoinsContext();
    console.log("error",error)
   return <>
        {error ? (
        <div className="coin-container">
            <div className="coin-container__wait">
                <Button classname={"coin-container__btn-refetch"} onClick={() => refetch & refetch()}>Please Try again</Button>
            </div>
        </div>): null}
    </>
}
const List = () => {
    const {
        latestData,
        resolvedData,
        start,
        handleNextPagination,
        handlePreviousPagination
    } = useCoinsContext(); 
    
    if(resolvedData){
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
                                    <CoinRow  key={obj.id} coin={obj}/>
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
    return null;
}
const  Page = () => {
    return (
    <CoinsProvider>
        <Loading />
        <ErrorView />
        <List />
    </CoinsProvider>)
    
}

export default Page
