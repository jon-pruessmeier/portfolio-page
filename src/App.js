import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";



function App() {

  const home = Home();
  //const projects = Projects(projectsJSON);
  const about = About();


  const [currentPage, setCurrentPage] = useState("home");

  const [pageJSX, setPageJSX] = useState(home);

  const changePage = () => {
    /*
    if (currentPage === "projects"){
      setPageJSX = projects;
    } else */ if (currentPage === "about"){
      setPageJSX = about;
    } else {
      setPageJSX = home;
    }
  }

  


  return (
    <div className="App container-fluid h-100">
      <div className="row h-100">

        <Navigation/>

        <div className="Section col-9 bg-secondary vh-100 d-flex align-items-center justify-content-center fs-1 text-white">
          {pageJSX}
        </div>

      </div>
    </div>
  );
}

export default App;
