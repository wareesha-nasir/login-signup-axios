//const axios = require("axios");
import axios from 'axios';
var connectionstring= 'http://18.215.179.46:3002/api/';

export const getMethod=(relativeURL)=>{
var url=connectionstring+relativeURL;
return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        const data = response.data.results;
        resolve(data);
      })
    });
};
 export const postMethod = (relativeUrl, user) => {
    var url = connectionstring + relativeUrl;
    return new Promise((resolve, reject) => {
      axios
        .post(url,user,{withCredentials:true})
            
        .then(function (response) {
          const data = response.data.results;
          resolve(data);
        })
        .catch(function (error) {
          let updatedData = false;
          resolve(updatedData);
        });
    });
  };
  