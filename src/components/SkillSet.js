import SkillCard from "./SkillCard";

function SkillSet(props){

    const skillSetName = props.name;
    const skills = props.skills;
    const skillsJSX = skills.map((skill) => {return <SkillCard skill={skill}/>});

    return (
        <div className="row">
            <div className="col">
                <div className="row mt-2">
                    <div className="col-12 d-flex justify-content-center">
                        <h2>{skillSetName + ":"}</h2>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    {skillsJSX}
                </div>
            </div>
        </div>
        
    )
}

export default SkillSet;