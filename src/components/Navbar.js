/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useCallback, useRef, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Button from './Button';
import {MenuIcon, CloseIcon} from './icons';
import logo from '../images/logo.svg'
const LargeScreenNav = () => {
    return (
        <nav id="navbar" className="nav hide">
            <ul className="nav__list">
                <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
                <li className="nav__item"><Link to="/exchanges" className="nav__link">Exchanges</Link></li>
                
            </ul>
        
        </nav>
    )
}

const SmallScreenNav = ({setShowMobileMenu}) => {
    const ref = useRef();
    
    const polyHandleShow = useCallback((e) => {
        console.log("reff from small", ref)
        if(e.target.id === "mobileNav"){
            return setShowMobileMenu(true);

        }
        
        if(!ref.current.contains(e.target)){
            return setShowMobileMenu((prevState) => (!prevState));
        }
    }, [setShowMobileMenu]);

    const handleClose = () => {
        setShowMobileMenu(false);
    }
    
    useEffect(() => {
        // add when mounted
        console.log("from useeffect",ref)
        document.addEventListener("mousedown", polyHandleShow);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown",polyHandleShow);
        };
    }, [polyHandleShow]);
    return (
        <nav 
            ref={ref}  
            className="nav-mobile"
        >
            <div className="nav-mobile__icon">
                <Button onClick={handleClose} classname={"nav-mobile__button"}><CloseIcon size={"100%"} /></Button>
            </div>
            <ul className="nav-mobile__list">
                <li className="nav-mobile__item"><Link to="/" className="nav-mobile__link">Home</Link></li>
                <li className="nav-mobile__item"><Link to="/exchanges" className="nav-mobile__link">Exchanges</Link></li>
                
            </ul>
        
        </nav>
    )
}

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const history = useHistory()
    const handleShow = () => setShowMobileMenu((prevState) => (!prevState));
    const handleHomeRoute = () => {
        history.push('/');
    }
    return (
        <header className="header">
            <div onClick={handleHomeRoute} role={"button"} className={"logo-container"}>
                <div className="icon-logo">
                    <img  src={logo} alt={"logo"} />
                </div>
                <p>Coind</p>
            </div>

            <LargeScreenNav />
            <div className="icon">
                <Button id="mobileNav" onClick={handleShow} classname={"icon__button"}><MenuIcon size={"100%"} color={"#fff"}/></Button>
            </div>
           {showMobileMenu ? (<SmallScreenNav setShowMobileMenu={setShowMobileMenu}/>): null}
           
        </header>
    )
}

export default Navbar
