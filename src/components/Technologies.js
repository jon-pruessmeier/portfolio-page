import skillsJSON from "../skills.json";
import SkillSet from "./SkillSet";

function Technologies() {

    const languages = <SkillSet name="Programming Languages" skills={skillsJSON.languages}/>
    const frontendAndMobile = <SkillSet name="Frontend and Mobile" skills={skillsJSON.frontendAndMobile}/>
    const backend = <SkillSet name="Backend" skills={skillsJSON.backend}/>
    const misc = <SkillSet name="Further" skills={skillsJSON.misc}/>

    return (
        <div className="col overflow-y-auto">
            {languages}
            {frontendAndMobile}
            {backend}
            {misc}
        </div>
    )
}
export default Technologies;