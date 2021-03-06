import skillsJSON from "../skills.json";
import SkillSet from "./SkillSet";

function Technologies() {

    const languages = <SkillSet name="Programming Languages" skills={skillsJSON.languages}/>
    const frontendAndMobile = <SkillSet name="Frontend and Mobile" skills={skillsJSON.frontendAndMobile}/>
    const backend = <SkillSet name="Backend" skills={skillsJSON.backend}/>
    const misc = <SkillSet name="Furthermore" skills={skillsJSON.misc}/>

    const overflowStyle = {
        overflowY: "auto",
        overflowX: "hidden"
    }

    return (
        <div className="col-12 vh-100 d-flex justify-content-center flex-column">
            <div style={overflowStyle} className="h-100 my-3" >
                {languages}  
                {frontendAndMobile}  
                {backend}
                {misc}  
            </div>
            
        </div>
    )
}
export default Technologies;