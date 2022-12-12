
import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbarBGcolor">
                <div className="container-fluid hi">
                    <img className='bookMyshowLogo' src="bookmyshowLogo.png" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex" role="search">
                        
                        <label htmlFor="searchIcon" className='searchIcon'>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>

                        </label>
                        <input className="form-control me-2 searchBar" type="search" placeholder="Search for Movies, Events, Plays, Sports and Activities" aria-label="Search" />

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

            <section>
                <nav className="nav nichewalaNavbar">
                    <a className="nav-link active leftSideLinks" aria-current="page" href="#">Movies</a>
                    <a className="nav-link leftSideLinks" href="#">Stream</a>
                    <a className="nav-link leftSideLinks" href="#">Events</a>
                    <a className="nav-link leftSideLinks" href="#">Plays</a>
                    <a className="nav-link leftSideLinks" href="#">Sports</a>
                    <a className="nav-link leftSideLinks" href="#">Activities</a>
                    <a className="nav-link leftSideLinks" href="#">Buzz</a>


                    <nav className='RightSideLinks_1'>
                        <a className="nav-link RightSideLinks" href="#">ListYourShow</a>
                        <a className="nav-link RightSideLinks" href="#">Corporates</a>
                        <a className="nav-link RightSideLinks" href="#">Offers</a>
                        <a className="nav-link RightSideLinks" href="#">Gift Cards</a>
                    </nav>

                </nav>
            </section>


            <section>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1670507854261_eatingweb.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item active">
                            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1670409770857_cdvwdwd.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item active">
                            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1670568965034_2erf.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </section>

        </div>
    )
}

export default Header;