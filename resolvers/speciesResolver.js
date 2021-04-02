import Species from "../models/speciesModel.js";

export default {
  Animal: {
    species: (parent, args) => {
      /*return speciesData.filter((species) => species.id === parent.species)[0];*/
      return Species.findById(parent.species);
    },
  },
  Mutation: {
    addSpecies: (parent, args) => {
      console.log("args: ", args);
      const newSpecies = new Species(args);
      return newSpecies.save();
    },
  },
};
