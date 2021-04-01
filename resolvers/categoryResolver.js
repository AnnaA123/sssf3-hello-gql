const categoryData = [
  {
    id: "1",
    categoryName: "Mammal",
  },
];

export default {
  Species: {
    categories: (parent, args) => {
      return categoryData.findById(parent.categoryName);
    },
  },
};
