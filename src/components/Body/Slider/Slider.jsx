import React from 'react'


export default function Slider() {
return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
        <img src="https://ewm.swiss/application/files/8216/1597/9679/E-commerce_web_design_EWM_SA_Digital_Agency_Geneva.jpg" className="d-block w-100" alt="..." style={{maxHeight : "500px"}}/>
        </div>
        <div className="carousel-item">
        <img src="https://th.bing.com/th/id/OIP.7MCjJvnU8gnvTbiPogFHvwHaEK?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." style={{maxHeight : "500px"}}/>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
  )
}
