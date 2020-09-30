/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useCallback, Fragment} from 'react';
import Button from './Button';

const TableMenu = ({setShowTableMenu, coin, history}) => {
    const ref = useRef();
    const polyHandleInfo = useCallback((e) => {
        if(e.target.id === "tablemenu"){
            return setShowTableMenu(true);

        }
        
        if(!ref.current.contains(e.target)){
            return setShowTableMenu((prevState) => (!prevState));
        }
    }, [setShowTableMenu]);
    
    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", polyHandleInfo);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown",polyHandleInfo);
        };
    }, []);
    const handleNavigation = (path) => {
        history.push(`/${path}`);
    }
    return (
        <div ref={ref} className={"table-popover"}>
            
                <Button
                        classname={"table-popover__button"}
                        onClick={() => handleNavigation("exchange")}
                    >
                        Exchange/Markets
                    </Button>
            
            
                <Button 
                        classname={"table-popover__button"}
                        onClick={() => handleNavigation("chart")}
                >
                    Charts
                </Button>
            
           
                <Button 
                    classname={"table-popover__button"}
                    onClick={() => handleNavigation("historical-data")}
                >
                    Historical Data
                </Button>
            
        </div>
    )
}

export default TableMenu
