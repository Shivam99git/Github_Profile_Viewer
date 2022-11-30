import React from 'react';
const footerYear = new Date().getFullYear();
const footerDate = new Date().getDate();
const Footer = () => {
    return <footer className='footer p-3 bg-gray-700 text-primary-content footer-center'>
        <div>
            <p>Made By Shivam Sharma</p>
            <p>Copyright &copy; {footerDate} {footerYear} All right reserved</p>
        </div>

    </footer>;
};

export default Footer;