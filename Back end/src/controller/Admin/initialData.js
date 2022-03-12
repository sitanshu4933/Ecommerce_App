const Category = require("../../models/category");
const Product = require("../../models/product");

const createCategory = (categories, parentId = null) => {
  const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }
  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      parentId: cate.parentId,
      children: createCategory(categories, cate._id),
    });
  }
  return categoryList;
};
module.exports.InitialData = async (req, res) => {
  const categories = await Category.find({});
  const products = await Product.find({})
    .populate("category")
    .select("_id name slug price quantity description productPicture");
  return res
    .status(200)
    .json({ categories: createCategory(categories), products });
};
