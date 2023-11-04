const { where } = require("sequelize");
const { Pet } = require("../models");
module.exports = {
  //show all pet
  async index(req, res) {
    try {
      const pets = await Pet.findAll();
      res.send(pets);
    } catch (error) {
      res.status(500).send({
        error: "The pets information was incorrect",
      });
    }
  },

  //create pet
  async create(req, res) {
    try {
      const pet = await Pet.create(req.body);
      res.send(pet.toJSON());
    } catch (error) {
      res.status(500).send({
        error: "The create pet information was incorrect",
      });
    }
  },

  //edit pet
  async put(req, res) {
    try {
      await Pet.update(req.body, {
        where: {
          id: req.params.petId,
        },
      });
      res.send(req.body);
    } catch (error) {
      res.status(500).send({
        error: "Update pet information was incorrect",
      });
    }
  },

  // delete pet
  async delete(req, res) {
    try {
      const pet = await Pet.findOne({
        where: {
          id: req.params.petId,
        },
      });
      if (!pet) {
        return res.status(403).send({
          error: "The pet id is not found",
        });
      }
      await pet.destroy();
      res.send(pet);
    } catch (error) {
      res.status(500).send({
        error: "Delete pet information was incorrect",
      });
    }
  },

  // show pet by id
  async show(req, res) {
    try {
      const pet = await Pet.findOne({
        where: {
          id: req.params.petId,
        },
      });
      if (!pet) {
        return res.status(403).send({
          error: "The pet id is not found",
        });
      }

      res.send(pet);
    } catch (error) {
      res.status(500).send({
        error: "pet information was incorrect",
      });
    }
  },
};
