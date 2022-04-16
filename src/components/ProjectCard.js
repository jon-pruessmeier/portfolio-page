function ProjectCard(props){

    const img = process.env.PUBLIC_URL + "imgs/projects/" + props.project.img;
    const name = props.project.name;
    const description = props.project.description;

    return (
        <div className="row justify-content-center d-flex mx-3">

            <div className="col-10 bg-light text-dark mx-3 mt-3 mb-3">
                <div className="row">
                    <div className="col-7">
                        <img src={img} alt={name} className="my-2 img-fluid"/>
                    </div>

                    <div className="col-5">
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default ProjectCard;