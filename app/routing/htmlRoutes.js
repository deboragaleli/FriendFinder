
// Dependencies
var path = require("path");

// Routing


module.exports = function(app) {
 
  // app.use(express.static(path.join(__dirname, 'public')));
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // If no matching route is found default to home
  
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};

