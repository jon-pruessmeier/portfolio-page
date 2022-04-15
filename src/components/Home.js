import profile_img from "../imgs/profile_pic.jpg"

const imgStyle = {
    borderRadius: "50%"
}


function Home() {
    return (
        <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <img src={profile_img} alt="profile" style={imgStyle}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="container">
                            <div className="row text-center">
                                <h1>Hi, I'm Jón Prüßmeier</h1>
                                <h3>I am an aspiring Software Developer based in Bielefeld.</h3>
                                <div className="col d-flex justify-content-center">
                                  <i className="bi bi-linkedin mx-2"></i>
                                  <i className="bi bi-github mx-2"></i>  
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
        </div>
    )
}

export default Home;