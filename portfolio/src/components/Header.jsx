import React from "react";

const Header = ({ links, location }) => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-sm">
                    <a className="navbar-brand" href="/">Portfolio</a>
                    <i className="fa-solid fa-bars navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {links.map((value, index) => {
                                return <li key={index + 1}>
                                    <a className={location.hash === value.url ? "active" : ""} href={value.url}>{value.link_name}</a>
                                </li>
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;