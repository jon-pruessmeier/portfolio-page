function SkillCard(props){
    const imgSrc = process.env.PUBLIC_URL + "/imgs/icons/" + props.skill.imgSrc;
    const skillName = props.skill.name;
    if (skillName){
        console.log(skillName);
    }

    const imgStyle = {
        width: "50px",
        height: "50px"
    }

    return (
        <div className="col-12 col-md-4 col-lg-2">
            <div className="card text-center bg-light text-dark">
                <img className="card-img-top" alt={`logo of ${skillName}`} src={imgSrc}  style={imgStyle}/>
                <div className="card-body">
                    <h2 className="card-title">{skillName}</h2>
                </div>
            </div>
        </div>
        
    )
}

export default SkillCard;