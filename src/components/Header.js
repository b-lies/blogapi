import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

            <a href="/" className="logo d-flex align-items-center">

                <img src="assets/img/logo.png" alt=""/> 
                <h1>ZenBlog</h1>
            </a>

            <nav id="navbar" className="navbar">
                <ul>
                <li><NavLink to="/">Blog</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>

            <div className="position-relative">
                <a href="10" className="mx-2"><span className="bi-facebook"></span></a>
                <a href="11" className="mx-2"><span className="bi-twitter"></span></a>
                <a href="12" className="mx-2"><span className="bi-instagram"></span></a>

                <a href="13" className="mx-2 js-search-open"><span className="bi-search"></span></a>
                <i className="bi bi-list mobile-nav-toggle"></i>


                <div className="search-form-wrap js-search-form-wrap">
                <form action="search-result.html" className="search-form">
                    <span className="icon bi-search"></span>
                    <input type="text" placeholder="Search" className="form-control"/>
                    <button className="btn js-search-close"><span className="bi-x"></span></button>
                </form>
                </div>

            </div>

        </div>

    </header>
  )
}
