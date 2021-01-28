import React from 'react';
import {Link} from 'react-router-dom';

 const Home=()=>{
    return(
        <div>
           <h3> You are logged in :)</h3> 
            <Link to='/Login'>Logout</Link>
        </div>
    )
};
export default Home;