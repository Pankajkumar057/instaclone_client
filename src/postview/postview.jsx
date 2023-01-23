import logo from "./logo1.png"
import "./postview.css"
import { BsFillCameraFill } from "react-icons/bs";
import{FaRegPaperPlane} from "react-icons/fa";
import{FaRegHeart} from "react-icons/fa";
import{AiOutlineEllipsis} from "react-icons/ai";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";


const Postviewpage =()=>{
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch("https://instaclone-server-olzr.onrender.com/post-page").then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setBlogs(data.user)
        })
        .catch((err)=>{
            if(err){
                console.error(err);
            }
        })
    }, [])

    return(
        <>
        <section className="container-p">
        <img className="logo-1" src={logo} alt="" />
        <span className="insta-head">Instaclone</span>
        <Link to="/form"><span className="camera"><BsFillCameraFill></BsFillCameraFill></span></Link>
        </section>
        <div className="post-data">
            {blogs.map((postdata,i)=>{
                return (<div key={i} className="container">
                    <div className="dots"><AiOutlineEllipsis></AiOutlineEllipsis></div>
                    <div className="name">{postdata.Name}</div>
                    <div className="location">{postdata.Location}</div>
                    <img src={""+postdata.image} alt="" />
                    <div className="icons"><FaRegHeart></FaRegHeart><FaRegPaperPlane></FaRegPaperPlane></div>
                    <div className="desc">{postdata.Description}</div>
                    
                    </div>)
            })}
        </div>
    </>
    )
}

export default Postviewpage


//     useEffect(()=>{
//         fetch("http://localhost:3000/post-page").then((res)=>{
//             return res.json();
//         })
//         .then((data)=>{
//             setBlogs(data);
//         })
//         .catch((err)=>{
//             if(err){
//                 console.log(err);
//             }
//         })
//     },[]);
//    console.log(blogs)