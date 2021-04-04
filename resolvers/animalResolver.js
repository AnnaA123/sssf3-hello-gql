import Animal from "../models/animalModel.js";

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
    addAnimal: (parent, args) => {
      console.log("args: ", args);
      const newAnimal = new Animal(args);
      return newAnimal.save();
    },
    modifyAnimal: (parent, args) => {
      const data = {
        animalName: args.animalName,
        species: args.species,
      };
      return Animal.findByIdAndUpdate(args.id, data);
    },
  },
};
