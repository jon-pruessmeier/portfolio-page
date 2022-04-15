function Navigation(){
    return (
        <div className="Navigation col-3 bg-black vh-100 text-white d-flex align-items-center justify-content-center fs-2">
          <ul className="nav flex-column">
            <li className="nav-item">
              <i className="bi bi-house-fill"></i>
              <span>  Home</span>
            </li>
            <li className="nav-item">
              <i className="bi bi-person-circle"></i>
              <span>  About</span>
            </li>
            <li className="nav-item">
              <i className="bi bi-archive-fill"></i>
              <span>  Projects</span>
            </li>
            <li className="nav-item">
              
            </li>

          </ul>
        </div>
    )
}

export default Navigation;