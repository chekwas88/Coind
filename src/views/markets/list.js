import React from 'react';
import Loader from 'react-loader-spinner';
import Button from '../../components/Button';
import Table from '../../components/Table';
import TableHead from '../../components/TableHead';
import MarketRow from './marketRow';
import {useMarketContext, MarketProvider} from '../../contexts/marketContext';

const Loading = () => {
    const {isLoading} = useMarketContext();
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
    const {error, refetch} = useMarketContext();
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
        data,
        coin,
    } = useMarketContext(); 
    
    if(data){
        
        return (
            <section className="coin-container">
                <div className="coin-container__board">
                    <div className="coin-container__header">
                        <h1>Markets For {coin}</h1>
                    </div>
                    <div className="coin-container__table">
                        <Table>
                            <TableHead>
                                
                                <th>Name</th>
                                <th>Base</th>
                                <th>Quote</th>
                                <th>Price</th>
                                <th>Volume</th>
                                <th>&#36;Volume USD</th>
                                
                            </TableHead>
                            <tbody className={"table__body"}>
        
        
                                {data.map((obj, index) => (
                                    <MarketRow  key={`${obj.name}${index}`} market={obj}/>
                                ))}
                        </tbody>
                        </Table>
                    </div>
                    
                </div>
            </section>
        )
    }
    return null;
}
const  Page = (props) => {
    return (
    <MarketProvider coinId={props.match.params.coinId} coin={props.match.params.coin}>
        <Loading />
        <ErrorView />
        <List />
    </MarketProvider>)
    
}

export default Page
