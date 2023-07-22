const ideas = require("../models/idea_models.js");
exports.fetchIdea = (req, res) => {
  res.status(200).send(ideas);
};
let count = 1;

exports.createIdea = (req, res) => {
  const idea = req.body;
  idea.id = ++count;
  ideas[count] = idea;
  res.status(201).send(ideas[count]);
};

exports.update = (req, res) => {
  const ideaId = req.params.id;
  if (ideas[ideaId]) {
    ideas[ideaId] = req.body;
    res.status(200).send(ideas[ideaId]);
  } else {
    res.status(400).send({
      message: "entered id not found",
    });
  }
};

exports.deleteIdea = (req, res) => {
  const temp = req.params.id;
  if (ideas[temp]) {
    delete ideas[temp];
    res.status(200).send({ message: "deleted succesfully" });
  } else {
    res.status(400).send({ message: "not found" });
  }
};
