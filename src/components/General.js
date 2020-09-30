import React from 'react';
import {ShieldIcon, CartIcon, CheckIcon, ClockIcon, BellIcon } from './icons';

const General = ({data}) =>  {
    const {coins_count, total_mcap, btc_d, total_volume, active_markets} = data;
    return (
        <div className="general">
            <div className="general__container">
                <div className="general__item">
                    <div className="general__item-content">
                        <div>
                            <ShieldIcon color={"#00BCD4"} />
                            <span>Cryptocurrencies:</span>
                        </div>
                        <span>{coins_count}</span>
                    </div>
                </div>
                <div className="general__item">
                    <div className="general__item-content">
                        <div><CartIcon color={"#00BCD4"} />
                            <span>Markets:</span>
                        </div>
                        <span>{active_markets}</span>
                    </div>
                </div>
                <div className="general__item">
                    <div className="general__item-content">
                    <div><CheckIcon color={"#00BCD4"} /><span>Market Cap:</span></div>
                        <span>{total_mcap}</span>
                    </div>
                </div>
                <div className="general__item">
                    <div className="general__item-content">
                    <div><ClockIcon color={"#00BCD4"} /><span>24h Volume:</span></div>
                        <span>{total_volume}</span>
                    </div>
                </div>
                <div className="general__item">
                    <div className="general__item-content">
                    <div><BellIcon color={"#00BCD4"}/><span>BTC Dominance</span></div>
                        <span>{`${btc_d}%`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default General;
