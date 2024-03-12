import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-sm">
                    <a className="navbar-brand" href="/">Portfolio</a>
                    <i className="fa-solid fa-bars navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li>
                                <a className="active" href="#intro">Home</a>
                            </li>
                            <li>
                                <a  href="#about">About</a>
                            </li>
                            <li>
                                <a  href="#skills">Skills</a>
                            </li>
                            <li>
                                <a  href="#projects">Projects</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;