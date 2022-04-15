function Navigation(props){

    const cursorStyle = {
      cursor: "pointer"
    }

    return (
        <div className="Navigation col-3 bg-black vh-100 text-white d-flex align-items-center justify-content-center fs-2">
          <ul className="nav flex-column">
            <li className="nav-item" style={cursorStyle} onClick={() => props.stateChanger("home")}>
              <i className="bi bi-house-fill"></i>
              <span>  Home</span>
            </li>
            <li className="nav-item" style={cursorStyle} onClick={() => props.stateChanger("technologies")}>
            <i class="bi bi-cpu-fill"></i>
              <span>  Technologies</span>
            </li>
              <li className="nav-item" style={cursorStyle} onClick={() => props.stateChanger("projects")}>
                <i className="bi bi-archive-fill"></i>
                <span>  Projects</span>
              </li>
          </ul>
        </div>
    )
}

export default Navigation;