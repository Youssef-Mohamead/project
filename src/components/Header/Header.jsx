import React from 'react'

export default function Header() {
  return (
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <div class="container-fluid">
            <a className="navbar-brand" href="#"><span className="headerr">E-commerce Website</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><span className="headerr">Home</span></a>
               
                </li>
                <li class="nav-item">
           
                <a className="nav-link active" aria-current="page" href="#"><span className="headerr">About</span></a>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search"  placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-warning"  type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
  )
}
