import ProjectCard from "./ProjectCard";

function Projects(projects){

    const projectsCards = projects.map((project) => ProjectCard(project)) //project == JSON

    return (
        <div className="card-deck">
            {projectsCards}
        </div>

    )
}

export default Projects;