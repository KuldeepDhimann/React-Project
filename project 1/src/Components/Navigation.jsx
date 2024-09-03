const Navigation = ()=>{
    return(
        <nav className="container">
        <div className="logo">
          <img src="/Image/brand_logo.png" alt="logo"></img>
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <div className="nav-button">
        <button>Login</button>
        </div>
      </nav>
    )
}

export default Navigation;