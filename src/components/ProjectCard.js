function ProjectCard(props){

    const img = process.env.PUBLIC_URL + props.project.img;
    const name = props.project.name;
    const description = props.project.description;

    return (
        <div className="card  h-100 text-white bg-dark">
            <img className="card-img-top img-fluid" alt="card-pic" src={img}/>
            <div className="card-body">
                <h1 className="card-title">{name}</h1>
                <p className="card-text">{description}</p>
            </div>

        </div>
    )
}
export default ProjectCard;