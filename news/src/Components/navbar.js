import React from "react";
import "./../Components/navbar.css"
function Navbar (){
  return(
    <div>
      <nav class="navbar navbar-expand-lg navbar bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
  
    <a class="navbar-brand" href="..">
    <img src="https://www.freepnglogos.com/uploads/nbc-png-logo/nbc-movies-png-logo-5.png" className="logo" alt="..."/>
      <h5 className="fs-4 text">NCR News </h5></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active fs-4 text ms-5" aria-current="page" href="..">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-4 text ms-2 me-2" href="..">Article</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-4 text" href="..">Wold News</a>
        </li>
        <li class="nav-item fs-4 text ">
          <a class="nav-link fs-4 text me-2" href="..">Sport</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-4 text" href="..">Helth</a>
        </li>
      
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
  )
};

export default Navbar;