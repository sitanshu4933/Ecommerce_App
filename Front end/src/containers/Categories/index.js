import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../actions";
import Layout from "../../components/Layout";

const Categories = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  console.log(category.category)
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const renderCategories = (category) => {
    let categories = [null];
    for (let i of category) {
      categories.push(<li>{i.name}</li>);
    }
    return categories;
  };
  return (
    <>
      <Layout sidebar>
        {/* <ul>{renderCategories(category)}</ul> */}
      </Layout>
    </>
  );
};

export default Categories;
