import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col1">        
                            <p>copyright © 2024 by <span>Bhudev</span> | All Right Reserved</p>
                    </div>
                    <div className="col-sm-6 col2">
                            <a href="/">
                                <i className="fas fa-arrow-up" />
                            </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;