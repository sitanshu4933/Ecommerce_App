import { categoryConstant } from "../actions/constants";

const initstate = {
  category: [],
  loading: false,
  error: null,
};

const buildNewCategory = (parentId, categories, category) => {
  let myCategories = [];
  for (let cat of categories) {
    console.log(cat._id);
    if (cat._id == parentId) {
      myCategories.push({
        ...cat,
        children:
          cat.children && cat.children.length > 0
            ? buildNewCategory(
                parentId,
                [
                  ...cat.children,
                  {
                    _id: category._id,
                    name: category.name,
                    slug: category.slug,
                    parentId: category.parentId,
                    children: category.children,
                  },
                ],
                category
              )
            : [],
      });
    } else {
      myCategories.push({
        ...cat,
        children:
          cat.children && cat.children.length > 0
            ? buildNewCategory(parentId, cat.children, category)
            : [],
      });
    }
  }
  return myCategories;
};

export default (state = initstate, action) => {
  switch (action.type) {
    case categoryConstant.GET_ALL_CATEGORIES_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstant.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        category: action.payload,
        loading: false,
      };
      break;
    case categoryConstant.GET_ALL_CATEGORIES_FAILURE:
      state = {
        ...initstate,
        loading: true,
        error: action.payload.error,
      };
      break;
    case categoryConstant.CREATE_NEW_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstant.CREATE_NEW_CATEGORY_SUCCESS:
      const { category } = action.payload;
      const updatedCategory = buildNewCategory(
        category.parentId,
        state.category,
        category
      );
      state = {
        ...state,
        category: updatedCategory,
        loading: false,
      };
      break;
    case categoryConstant.CREATE_NEW_CATEGORY_FAILURE:
      state = {
        ...initstate,
        loading: true,
      };
      break;
  }
  return state;
};
