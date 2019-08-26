import React from 'react';

export default function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer" id="footer">
            &copy; {year}
        </div>
    )
}