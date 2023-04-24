//  module 5 - APIData. Axios can give you lots of info you don't need. 
const axios = require('axios'); //must be at the top - will work for all the functions. Making an http get request - can't use fetch in node js

const fetchAPIData = (req, res) => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://fakestoreapi.com/products',
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));

      // I have added this. The rest is from postman
      res.status(200)
      res.json(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
    
}


// export the function for the router to access
module.exports = {
    fetchAPIData
}