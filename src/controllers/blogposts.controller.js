const axios = require("axios");

exports.findAll = (req, res) => {
  // res.send("You have reached the controller for getting all blogposts.");
  // call the json placeholder api to get a list of blog posts
  axios.get("https://jsonplaceholder.typicode.com/posts").then((apiCall) => {
    res.send(apiCall.data);
  });
};

exports.findById = (req, res) => {
  // res.send("You have reached the controller for getting all blogposts.");
  // call the json placeholder api to get a list of blog posts
  axios
    .get("https://jsonplaceholder.typicode.com/posts/" + req.params.id)
    .then((apiCall) => {
      res.send(apiCall.data);
    });
};
