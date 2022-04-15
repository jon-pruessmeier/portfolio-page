function ProjectCard(props){

    const img = props.project.img;
    const name = props.project.name;
    const description = props.project.description;

    return (
        <div className="card text-white bg-dark">
            <img className="card-img-top" alt="card-pic" src={img}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>

        </div>
    )
}
export default ProjectCard;