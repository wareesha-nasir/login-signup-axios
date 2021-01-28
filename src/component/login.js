import React from 'react';
import {useHistory} from 'react-router-dom';
import { userlogin } from './getmethod';


 const Login=()=>{
const history=useHistory();
const handleLogin=(e)=>{
        e.preventDefault();
        //console.log("form submitte");
        const useremail=document.getElementById("email");
        const userpassword=document.getElementById("password");

        userlogin(useremail,userpassword).then(doc => {

            
                history.push('/Home')
        
            console.log(doc);
            //
            })
        
}
        return(
            <div>
                <form onSubmit={(e)=>handleLogin(e)}>
                    <label>email</label>
<input type="email" name="email" id="email" />
<label>password</label>
<input type="password" name="password" id="password" />
<input type="submit" name="submit"/>
                </form>
            </div>
        )
    
}
export default Login;
 

