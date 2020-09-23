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

