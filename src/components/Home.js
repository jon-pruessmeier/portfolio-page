import profile_img from "../imgs/profile_pic.jpg"

const imgStyle = {
    borderRadius: "50%"
}


function Home() {
    return (
        <div>
                <div>
                    <img src={profile_img} alt="profile" style={imgStyle}/>
                </div>

                <div>
                    <h1>Hi, I'm Jón Prüßmeier</h1>
                    <h3>I am an aspiring Software Developer based in Bielefeld.</h3>
                </div>
        </div>
    )
}

export default Home;