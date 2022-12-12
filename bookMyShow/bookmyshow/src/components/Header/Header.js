
import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbarBGcolor">
                <div className="container-fluid hi">
                    <img className='bookMyshowLogo' src="../public/Raw Data/Images/bookmyshowLogo.png" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                    </form>
                    <div className="collapse navbar-collapse headerSignIn" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle links" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Delhi/NCR
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button className="btn btn-outline-success links signInbutton" type="submit">Sign In</button>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header;