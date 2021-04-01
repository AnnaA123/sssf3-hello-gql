const speciesData = [
  {
    id: "1",
    speciesName: "Cat",
    category: "1",
  },
];

export default {
  Animal: {
    species: (parent, args) => {
      return speciesData.findById(parent.species);
    },
  },
};
