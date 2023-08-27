import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
  const [searchValue, setSearchValue] = useState('');
  const [activeLink, setActiveLink] = useState('Home');

  const handleSearchForm = (event) => {
    event.preventDefault();
    props.onSearch(searchValue);
  };
  const handleCategoryChange = (category) => {
    setSearchValue('');
    setActiveLink(category);
    props.onCategoryChange();
  };
  const NavbarToggler=()=>{
    document.querySelector('.navbar-collapse').classList.toggle('show')
  }
    return(
        <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
   <div className="container navbar-container">   
  <Link  onClick={() => handleCategoryChange('Home')} className={`navbar-brand ${activeLink === 'Home' ? '' : ''}`} to="/">NewsOwl</Link>
  <button className="navbar-toggler" onClick={NavbarToggler}type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><Link  onClick={() => handleCategoryChange('Home')} className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`} to="/">Home</Link></li>
      <li className="nav-item"><Link  onClick={() => handleCategoryChange('Business')} className={`nav-link ${activeLink === 'Business' ? 'active' : ''}`} to="/business">Business</Link></li>
      <li className="nav-item"><Link  onClick={() => handleCategoryChange('Entertainment')} className={`nav-link ${activeLink === 'Entertainment' ? 'active' : ''}`} to="/entertainment">Entertainment</Link></li>
      <li className="nav-item"><Link  onClick={() => handleCategoryChange('Health')} className={`nav-link ${activeLink === 'Health' ? 'active' : ''}`} to="/health">Health</Link></li>
      <li className="nav-item"><Link  onClick={() => handleCategoryChange('Science')} className={`nav-link ${activeLink === 'Science' ? 'active' : ''}`} to="/science">Science</Link></li>
      <li className="nav-item"><Link  onClick={() => handleCategoryChange('Sports')} className={`nav-link ${activeLink === 'Sports' ? 'active' : ''}`} to="/sports">Sports</Link></li>
      <li className="nav-item"><Link  onClick={() => handleCategoryChange('Technololgy')} className={`nav-link ${activeLink === 'Technololgy' ? 'active' : ''}`} to="/technology">Technololgy</Link></li>
    </ul>
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSearchForm}>
          <input
            className="form-control mr-sm-2 search-field"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
  </div>
</div>  
</nav>
        </>
    )
}