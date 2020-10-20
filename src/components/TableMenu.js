/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useCallback, Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import Button from './Button';

const TableMenu = ({setShowTableMenu, obj}) => {
    const history = useHistory();
    console.log("kkk", obj);
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
    const handleNavigation = (path, id, name) => {
        if(id && name){
           return  history.push(`/${path}/${name}/${id}`)
        }
        return history.push(`/${path}`);
    }
    return (
        <div ref={ref} className={"table-popover"}>
            
                <Button
                    classname={"table-popover__button"}
                    onClick={() => handleNavigation("markets", obj.id, obj.name)}
                >
                        Markets
                </Button>
            
                <Button
                    classname={"table-popover__button"}
                    onClick={() => handleNavigation("exchanges")}
                >
                    Exchange
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
