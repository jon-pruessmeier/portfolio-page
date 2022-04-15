import skillsJSON from "../skills.json";
import SkillSet from "./SkillSet";

function About() {

    const languages = <SkillSet name="Programming Languages" skills={skillsJSON.languages}/>
    const frontendAndMobile = <SkillSet name="Frontend and Mobile" skills={skillsJSON.frontendAndMobile}/>
    const backend = <SkillSet name="Backend" skills={skillsJSON.backend}/>
    const misc = <SkillSet name="Miscellaneous" skills={skillsJSON.misc}/>

    const aboutStyle = {
        
    }


    return (
        <div className="container-fluid overflow-scroll">
            {languages}
            {frontendAndMobile}
            {backend}
            {misc}
        </div>
    )
}
export default About;