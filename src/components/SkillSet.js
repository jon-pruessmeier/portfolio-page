import SkillCard from "./SkillCard";

function SkillSet(props){

    const skillSetName = props.name;
    const skills = props.skills;
    const skillsJSX = skills.map((skill) => {return <SkillCard skill={skill}/>});

    return (
        <div className="row">
            <div className="col">
                <h1>{skillSetName + ":"}</h1>
            <div className="col d-flex justify-content-center">
                {skillsJSX}
            </div>   
        </div>
        </div>
        
    )
}

export default SkillSet;