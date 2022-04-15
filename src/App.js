import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import projectsJSON from "./projects.json"
import Technologies from "./components/Technologies";



function App() {

  const home = <Home/>;
  const projects = <Projects projectsList={projectsJSON}/>
  const technologies = <Technologies/>

  const [currentPage, setCurrentPage] = useState("home");
  const [pageJSX, setPageJSX] = useState(home);


  function changePage() {
    if (currentPage === "projects"){
      return projects;
    } else if (currentPage === "technologies"){
      return technologies;
    } else {
      return home;
    }
  }

  useEffect(() => {
      setPageJSX( changePage() )
    }, [currentPage]
  );

  


  return (
    <div className="App container-fluid h-100">
      <div className="row h-100">

        <Navigation stateChanger={setCurrentPage}/>

        <div className="Section col-9 bg-dark d-flex align-items-center justify-content-center fs-1 text-white">
          {pageJSX}
        </div>

      </div>
    </div>
  );
}

export default App;
