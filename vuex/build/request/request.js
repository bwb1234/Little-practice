module.exports.request = function(app) {
  app.get("/api", (req, res) => {
    let data = require("../../src/mock/data.json");
    res.send(data);
  });
};
module.exports.list = function(app) {
  app.get("/list", (req, res) => {
    let data = require("../../src/mock/loag.json");
    res.send(data);
  });
};
