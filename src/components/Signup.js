import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Signup</h1>

            <form action="POST">
                <input onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" style={{width: '100%', height: '30px', marginBottom: '10px'}} /><br />
                <input onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" style={{width: '100%', height: '30px', marginBottom: '10px'}} /><br />
                <button type="submit" onClick={submit}>Submit</button>
                <button onClick={()=>history("/")}>Login</button>

            </form>
        </div>
    )
}

export default Login