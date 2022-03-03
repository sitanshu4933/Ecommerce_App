import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, getAllCategories } from "../../actions";
import Layout from "../../components/Layout";
import { Button, Modal } from "react-bootstrap";
import Input from "../../components/UI/input";

const Categories = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const [show, setShow] = useState(false);
  const [categoryName, setcategoryName] = useState("");
  const [categoryImage, setcategoryImage] = useState("");
  const [categoryParentId, setcategoryParentId] = useState("");
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const handleClose = () => {
    const form = new FormData();
    form.append("name", categoryName);
    form.append("parentId", categoryParentId);
    form.append("categoryImage", categoryImage);
    console.log(form);

    dispatch(addCategory(form));
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const renderCategories = (category) => {
    let mycategories = [null];
    for (let i of category) {
      mycategories.push(
        <li>
          {i.name}
          {i.children.length > 0 ? (
            <ul>{renderCategories(i.children)}</ul>
          ) : null}
        </li>
      );
    }
    return mycategories;
  };

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={categoryName}
            placeholder="Choose category name"
            onChange={(e) => {
              setcategoryName(e.target.value);
            }}
          ></Input>
          <select
            value={categoryParentId}
            onChange={(e) => setcategoryParentId(e.target.value)}
          >
            select from categorylist
            <option>select category</option>
            {createCategoryList(category.category).map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              );
            })}
          </select>
          <Input
            type="file"
            name="categoryImage"
            onChange={(e) => {
              setcategoryImage(e.target.files[0]);
            }}
          ></Input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Layout sidebar>
        <ul>{renderCategories(category.category)}</ul>
        <Button variant="primary" onClick={handleShow}>
          Add
        </Button>
      </Layout>
    </>
  );
};

export default Categories;
