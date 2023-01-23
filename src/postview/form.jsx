import "./form.css"
import {Link} from "react-router-dom"
import { useState } from "react"

const  Inputform =()=>{
        const [post, setPost] = useState({Name:"", Location:"", Description:"",image:""});

        const{Name, Location, Description, image} = post
        const onSubmit = async (e) => {
            e.preventDefault();
            fetch("https://instaclone-server-olzr.onrender.com/post-page", {
                method: "POST",
                body: JSON.stringify({
                    Name:Name,
                    Location:Location,
                    Description:Description,
                    image:image
                }),
                headers: {
                  "Content-Type": "application/json",
                   Accept:"application/json"
                },
              }).then((res) => res.json())
                .then((data)=>{
                    setPost((data)=>[post, ...data]);
                })
                .catch((err)=>{
                    console.error(err + "There is error")
                })
                console.log(post)
}
       

    return(
        <>
        <form className="form-container">
            <input type="file" id="Choose" onChange={(e)=>{setPost({...post, image:e.target.files})}} /><br/>
            <label htmlFor="name" >Name :</label><br/>
            <input type="text"  onChange={(e)=>{setPost({...post, Name:e.target.value})}}/><br/>
            <label htmlFor="name" >Location :</label><br/>
            <input type="text" onChange={(e)=>{setPost({...post, Location:e.target.value})}}/><br/>
            <label htmlFor="name">Description :</label><br/>
            <input type="text"  onChange={(e)=>{setPost({...post, Description:e.target.value})}}/><br/>
            <Link to="/postview"><button className="button" onClick={onSubmit} type= "submit">Post</button></Link>
        </form>
        </>
    )
}

export default Inputform