import React from "react";
import '../App.css';

const Footer = () => {
    return (
        <footer className="page-footer font-small bg-blue pt-4">
            <div className="container text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
                        <p>You can contact us on setvi.com</p>
                    </div>
                    <div className="col-md-6 mb-md-0 mb-3">
                        <h5 className="text-uppercase font-weight-bold">Smashing Stores</h5>
                        <span role="img" aria-label>Built with 💕 by <a href="https://github.com/Rusleo-max">Yicheng Jiang</a></span>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright
                <span> Smashing Stores</span>
            </div>
        </footer>
    );
};

export default Footer;