import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
                    aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="index.ejs">Lindsey's Bookshelf</a>
                <form className="d-flex" role="search" action="search.ejs" method="GET">
                    <input type="text" id="search-input" name="query" className="form-control"
                        placeholder="Search by author or title" />
                    <button id="search-button" className="btn btn-primary" type="submit">Search</button>
                </form>
                <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-body">
                        <div className="d-flex flex-column">
                            <div className="mb-3">
                                <div className="offcanvas-header">
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="row">
                                    <div className="col">
                                        <div id="wing-l"></div>
                                    </div>
                                    <div className="col">
                                        <div id="wing-r"></div>
                                    </div>
                                </div>
                                <br />
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a id="search-link" className="nav-link" href="search.ejs">Search
                                            Library</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="list-link" className="nav-link" href="list.ejs">View
                                            Lists</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="offcanvas-footer">
                                <div className="text-center p-3">
                                    © 2023 Copyright: Lindsey Jimenez
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;