function ProjectCard(props){

    const img = process.env.PUBLIC_URL + "/projects/" + props.project.img;
    const name = props.project.name;
    const description = props.project.description;

    return (
        <div className="d-flex justify-content-center flex-column border rounded bg-light text-dark text-center">
            <img src={img} alt={name} height="200px" width="200px"/>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}
export default ProjectCard;