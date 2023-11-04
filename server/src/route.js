const UserAuthenController = require("./controllers/UserAuthenController");
const UserController = require("./controllers/UserController");
const isAuthensController = require("./authen/isAuthenController");
const petController = require("./controllers/petController");

module.exports = (app) => {
  // get user/pet by id
  app.get("/users", UserController.index, UserController.index);
  app.get("/pets", petController.index);
  // create user/pet
  app.post("/user", UserController.create);
  app.post("/pet", petController.create);
  // edit user/pet, suspend, active
  app.put("/user/:userId", UserController.put);
  app.put("/pet/:petId", petController.put);
  // delete user/pet
  app.delete("/user/:userId", UserController.delete);
  app.delete("/pet/:petId", petController.delete);
  // get all user/pet
  app.get("/user/:userId", UserController.show);
  app.get("/pet/:petId", petController.show);
  // login
  app.post("/login", UserAuthenController.login);
};
