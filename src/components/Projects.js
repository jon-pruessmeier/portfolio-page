import ProjectCard from "./ProjectCard";

function Projects(props){

    const projectsCards = props.projectsList.map((project) => <ProjectCard project={project}/>) //project == JSON

    return (
        <div className="col-12 overflow-auto vh-100">
            {projectsCards}
        </div>

    )
}

export default Projects;