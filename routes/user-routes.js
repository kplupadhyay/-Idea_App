// const express = require("express");

// const router = express.Router();
// const { fetchIdea } = require("../controllers/user.idea.js");

const ideaController = require("../controllers/user.idea.js");

module.exports = (app) => {
  app.get("/fetch", ideaController.fetchIdea);

  app.post("/post", ideaController.createIdea);

  app.put("/put/:id", ideaController.update);

  app.delete("/del/:id", ideaController.deleteIdea);
};

// module.exports = router;
