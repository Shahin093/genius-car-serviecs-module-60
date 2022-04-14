import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className='text-center mt-5'>
                <p><small>copyright @ {new Date().getFullYear()}</small></p>
            </footer>
        </div>
    );
};

export default Footer;