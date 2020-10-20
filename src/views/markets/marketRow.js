import React, {useState} from 'react'
import {formatNumber} from '../../util';
import TableMenu from '../../components/TableMenu';
import { MenuIcon} from '../../components/icons';

const  MarketRow = ({market}) => {
    return (
        <tr>
            <td>
                <p className="coin-symbol">{market.name}</p>
            </td>
            <td>{market.base}</td>
            <td>{market.quote}</td>
            <td>{formatNumber(market.price_usd)}</td>
            <td>{formatNumber(market.volume, '0.00')}</td>
            <td>{formatNumber(market.volume_usd, '0.00')}</td>
            
        </tr>
    )
}

export default MarketRow
