import Category from "../models/categoryModel.js";

export default {
  Species: {
    category: (parent, args) => {
      /*return categoryData.filter(
        (category) => category.id === parent.category
      )[0];*/
      return Category.findById(parent.category);
    },
  },
  Mutation: {
    addCategory: (parent, args) => {
      console.log("args: ", args);
      const newCategory = new Category(args);
      return newCategory.save();
    },
  },
};
