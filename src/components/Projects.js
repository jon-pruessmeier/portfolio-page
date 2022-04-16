import ProjectCard from "./ProjectCard";

function Projects(props){

    const projectsCards = props.projectsList.map((project, index) => <ProjectCard index={index} project={project} key={project.name + index}/>) //project == JSON

    return (
        <div className="col-12 overflow-auto vh-100">
            {projectsCards}
        </div>

    )
}

export default Projects;