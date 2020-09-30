import React, {useState} from 'react'
import {formatNumber} from '../../util';
import TableMenu from '../../components/TableMenu';
import { MenuIcon} from '../../components/icons';

const  CoinRow = ({coin, history}) => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <tr>
            <td>
                <p className="coin-name">{coin.name}</p>
                <p className="coin-symbol">{coin.symbol}</p>
            </td>
            <td>{coin.price_usd}</td>
            <td>{coin.market_cap_usd}</td>
            <td>{coin.tsupply}</td>
            <td>{formatNumber(coin.volume24, '0.00')}</td>
            <td>{coin.percent_change_24h}</td>
            <td>{coin.percent_change_1h}</td>
            <td ><span onClick={() => setShowMenu(!showMenu)}  className="coin-container__button"><MenuIcon color="#00BCD4" size={20}/></span></td>
            {showMenu ? (<td id="tablemenu" className="coin-container__menu"><TableMenu setShowTableMenu={setShowMenu} history={history} coin={coin} /></td>):null}
        </tr>
    )
}

export default CoinRow
