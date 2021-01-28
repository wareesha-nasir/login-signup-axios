import React from 'react';
import { postUser } from './getmethod';
import {useHistory} from 'react-router-dom';
 
 const Signup=()=>{
const history=useHistory();
const handleSubmit=(e)=>{
e.preventDefault();
const name=document.getElementById("uname");
const email=document.getElementById("email");
const password=document.getElementById("password");
const user={name,email,password}
postUser(user).then(()=>{
history.push("/Home");
},
)
}
return(
            <div>
                <form onSubmit={(e)=>handleSubmit(e)} >
<input type="text" name="username" id="uname" />
<input type="email" name="email" id="email" />
<input type="password" name="password" />
<input type="submit" name="submit" />

                </form>
            </div>
        )
    
}
export default Signup;