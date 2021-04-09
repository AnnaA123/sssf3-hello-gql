import Animal from "../models/animalModel.js";
import { AuthenticationError } from "apollo-server-express";

export default {
  Query: {
    animals: () => {
      return Animal.find();
    },
    animal: (parent, args) => {
      return Animal.findById(args.id);
    },
  },
  Mutation: {
    addAnimal: (parent, args, { user }) => {
      console.log("args and context: ", args, user);
      if (!user) {
        throw new AuthenticationError("You are not authenticated!");
      }
      const newAnimal = new Animal(args);
      return newAnimal.save();
    },
    // ^^^ same thing as below but with object destructuring
    /*
    addAnimal: (parent, args, context) => {
      console.log("args and context: ", args, context.user);
      const newAnimal = new Animal(args);
      return newAnimal.save();
    },
    */
    modifyAnimal: (parent, args) => {
      const data = {
        animalName: args.animalName,
        species: args.species,
      };
      return Animal.findByIdAndUpdate(args.id, data);
    },
  },
};
