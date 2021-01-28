import {getMethod} from './response.js';
import {postMethod} from './response.js';

export const userlogin=(email,password)=>{
var relativeURL=`users-login?email=${email}&password=${password}`;
return getMethod(relativeURL)
};

export const postUser = (user) => {
    var relativeUrl = `members/`;
    return postMethod(relativeUrl, user);
  };
  