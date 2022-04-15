function Navigation(props){

    return (
        <div className="Navigation col-3 bg-black vh-100 text-white d-flex align-items-center justify-content-center fs-2">
          <ul className="nav flex-column">
            <button>
              <li className="nav-item" onClick={() => props.stateChanger("home")}>
                <i className="bi bi-house-fill"></i>
                <span>  Home</span>
              </li>
            </button>
            <button>
              <li className="nav-item" onClick={() => props.stateChanger("about")}>
                <i className="bi bi-person-circle"></i>
                <span>  About</span>
              </li>
            </button>
            <button>
                <li className="nav-item" onClick={() => props.stateChanger("projects")}>
                  <i className="bi bi-archive-fill"></i>
                  <span>  Projects</span>
                </li>
            </button>
            
          </ul>
        </div>
    )
}

export default Navigation;