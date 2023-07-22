const express = require("express");

const app = express();

app.use(express.json());
require("./routes/user-routes.js")(app);
// router();

// app.use("/get/ideas", router);

app.listen(4300, () => {
  console.log("started");
});
