import ProjectCard from "./ProjectCard";

function Projects(props){

    const projectsCards = props.projectsList.map((project) => <ProjectCard project={project}/>) //project == JSON

    return (
        <div className="card-deck">
            {projectsCards}
        </div>

    )
}

export default Projects;