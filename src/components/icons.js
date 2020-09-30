import React from 'react';


export const MenuIcon = ({ strokeWidth = "2", color = "#ccc", size = "24" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            className="feather feather-menu"
            viewBox="0 0 24 24"
        >
            <path d="M3 12L21 12"></path>
            <path d="M3 6L21 6"></path>
            <path d="M3 18L21 18"></path>
        </svg>
    );
};
export const CloseIcon = ({ color = "#ccc", size = "24" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
            <path fill={"none"} d="M0 0h24v24H0V0z" />
            <path fill={color} d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
    );
};
export const ChevronForward = ({ color = "#ccc", size = "24" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeWidth="2"
            className="feather feather-chevron-right"
            viewBox="0 0 24 24"
        >
            <path d="M9 18L15 12 9 6"></path>
        </svg>
    );
};

export const ChevronBackward = ({ color = "#ccc", size = "24" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeWidth="2"
            className="feather feather-chevron-left"
            viewBox="0 0 24 24"
        >
            <path d="M15 18L9 12 15 6"></path>
        </svg>
    );
};
export const ClockIcon = ({ strokeWidth = "2", color = "#ccc", size = "24" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            className="feather feather-clock"
            viewBox="0 0 24 24"
        >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6L12 12 16 14"></path>
        </svg>
    );
};


export const ShieldIcon = ({ strokeWidth = "2", color = "#ccc", size = "24" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            className="feather feather-shield"
            viewBox="0 0 24 24"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
    );
};
export const BellIcon = ({ strokeWidth = "2", color = "#ccc", size = "24" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            className="feather feather-bell"
            viewBox="0 0 24 24"
        >
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"></path>
        </svg>
    );
};
export const HistoryIcon = ({ color = "#ccc", size = "24" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
                fill={color}
                d="M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21a9 9 0 000-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
            ></path>
        </svg>
    );
};

export const CartIcon = ({ color = "#ccc", size = "24" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="2">
                <g transform="translate(0 2)">
                    <path fill="none" stroke={color} strokeWidth="2"  d="M0 5h24v10.374C24 18.48 21.544 21 18.514 21H5.486C2.456 21 0 18.481 0 15.374V5z"></path>
                    <path stroke={color} strokeWidth="2" d="M5 6V0h14v6"></path>
                </g>
            </g>
        </svg>
    );
};
export const CheckIcon = ({ color = "#ccc", size = "24" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
            <path fill={color} d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
        </svg>
    );
};

