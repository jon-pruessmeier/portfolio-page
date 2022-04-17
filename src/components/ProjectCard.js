import { useState } from "react";
import ReactDom from "react-dom"

function ProjectCard(props){

    const img = process.env.PUBLIC_URL + "imgs/projects/" + props.project.img;
    const name = props.project.name;
    const description = props.project.description;
    const gitHub = props.project.github;
    const web = props.project.web;

    const [isOpen, setOpen] = useState(false);

    const cursorStyle = {
        cursor: "zoom-in"
    }

    const modal = () => {
        const modalStyle = {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#FFF",
            padding: "50px",
            zIndex: 1000

        }
        
        const overlayStyle = {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, .7)",
            zIndex: 1000
        }

        
        const modalJSX = (
            <div>
                <div style={overlayStyle} onClick={() => {setOpen(false)}}></div>
                <div className="container">
                    <div className="row">

                        <div className=" col-8 rounded bg-dark text-light" style={modalStyle}>
                            <div className="row">
                                <div className="col-12">
                                  <img className="img-fluid" src={img}/>  
                                </div>
                                
                            </div>

                            <div className="row">
                                <div className="col-12 mt-3 d-flex justify-content-center">
                                   <button className="btn btn-lg btn-secondary" onClick={() => {setOpen(false)}}>Close</button> 
                                </div>
                                
                            </div>
                            
                        </div>


                    </div>
                </div>  
            </div>
            
        )

        if (!isOpen) return null;

        return ReactDom.createPortal(modalJSX, document.getElementById("portal"))


    }

    const justify  = () => {
        if (props.index % 2 === 0){
            return ("row d-flex mx-3 justify-content-start")
        }
        return ("row d-flex mx-3 justify-content-end")
    }

    const text = () => {
        const linkGitHub = () => {
            if (gitHub) return <a href={gitHub} className="text-light"><i class="bi bi-github my-2"></i></a>
            return null
        }

        const linkWeb = () => {
            if (web) return <a href={web} className="text-light"><i class="bi bi-globe2 my-2"></i></a>
            return null;
        }

        const seeAlso = () => {
            if (web || gitHub){
                return (
                    <h4 className="text-light">See also: {linkGitHub()} {linkWeb()}</h4>                    
                )
            } 
            return null;
        }

        return (
            <div className="col-7 text-left d-flex justify-content-center flex-column text-center">
                    <h1 className="mt-2 font-weight-bold">{name}</h1>
                    <p>{description}</p>
                    {seeAlso()}
            </div>
        )
    }

    const arrangement = () => {

        if (props.index % 2 === 0) {
            return (
                <div className="row">
                    <div className="col-5 d-flex flex-column justify-content-center" style={cursorStyle}>
                        <img src={img} alt={name} className="my-2 img-fluid rounded zoomPic" onClick={() => {setOpen(true)}}/>
                    </div>

                    {modal()}

                    {text()}
                </div>
            )
        }

        return (
            <div className="row">
                {text()}

                {modal()}

                <div className="col-5 d-flex flex-column justify-content-center" style={cursorStyle}>
                    <img src={img} alt={name} className="my-2 img-fluid rounded zoomPic" onClick={() => {setOpen(true)}}/>
                </div>
                    
            </div>
        )
    }


    return (
        <div className={justify()}>

            <div className="col-10 bg-secondary bg-opacity-25 text-light mx-3 my-3 rounded">
                <div className="row">
                    
                    {arrangement()}

                </div>
            </div>

        </div>
    )
}
export default ProjectCard;