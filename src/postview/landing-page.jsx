import img from "./image-194.png"
import "./landing-page.css"
import {Link} from "react-router-dom"

const Landingpage = ()=>{
    return(
        <>
        <h1 className="insta">Instaclone</h1>
        <section className="container-1">
            <img  className="logo" src={img} alt=""/>
            <Link to="/postview"><button className="btn" onClick={()=>{}}>Enter</button></Link> 
        </section>
        </>
    )
}

export default Landingpage