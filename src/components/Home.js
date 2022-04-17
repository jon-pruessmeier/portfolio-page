import personal from "../personal.json"

const imgStyle = {
    borderRadius: "50%"
}

const imgPath = process.env.PUBLIC_URL + '/imgs/profile_pic.jpg';


function Home() {
    return (
        <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <img src={imgPath} alt="profile" style={imgStyle} className="zoomPic"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="container">
                            <div className="row text-center">
                                <h1>Hi, I'm Jón Prüßmeier</h1>
                                <h3>I am an aspiring Software Developer based in Bielefeld.</h3>
                                <div className="col d-flex justify-content-center">
                                    <a href={personal.linkedin} className="text-light">
                                        <i className="bi bi-linkedin mx-2 zoomPic pointerIcon"></i>
                                    </a>
                                    <a href={personal.github} className="text-light">
                                        <i className="bi bi-github mx-2 zoomPic pointerIcon"></i>  
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
        </div>
    )
}

export default Home;