import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <p><small>copyright @ / dynamic year/P{new Date().getFullYear()}</small></p>
            </footer>
        </div>
    );
};

export default Footer;