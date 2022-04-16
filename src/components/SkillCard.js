function SkillCard(props){
    const imgSrc = process.env.PUBLIC_URL + "/imgs/icons/" + props.skill.imgSrc;
    const skillName = props.skill.name;
    if (skillName){
        console.log(skillName);
    }

    const imgStyle = {
        height: "75%"
    }

    const cardStyle = {
        height: "150px",
        width: "170px"
    }

    const topStyle = {
        height: "60%"
    }

    const bottomStyle = {
        height: "40%"
    }

    return (
        <div style={cardStyle} className="col-10 col-sm-4 col-xl-2 mx-2 my-1 text-center rounded bg-secondary bg-opacity-25 text-light d-flex justify-content-center flex-column">
                    <div className="d-flex justify-content-center align-items-center pointerIcon skillIcon h-75" style={topStyle}>
                        <img alt={`logo of ${skillName}`} src={imgSrc} style={imgStyle}/>
                    </div>
                    <div className="d-flex justify-content-center h-25" style={bottomStyle}>
                        <h3>{skillName}</h3>
                    </div>
        </div>
        
    )
}

export default SkillCard;