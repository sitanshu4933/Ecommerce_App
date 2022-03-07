import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { Button, Modal } from "react-bootstrap";
import Input from "../../components/UI/input";


const Products = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const [show, setShow] = useState(false);
  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductQuantity, setProductQuantity] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [productImage, setproductImage] = useState("");
  const [categoryId, setcategoryId] = useState("");


  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
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
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            label="Product name :"
            value={ProductName}
            placeholder="Enter Product name"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          ></Input>
          <Input
            label="Product Price :"
            value={ProductPrice}
            placeholder="Enter Product price"
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
          ></Input>
          <Input
            label="Product Quantity:"
            value={ProductQuantity}
            placeholder="Enter Product Quantity"
            onChange={(e) => {
              setProductQuantity(e.target.value);
            }}
          ></Input>
          <Input
            label="Product Description :"
            value={ProductDescription}
            placeholder="Enter Product Description"
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
          ></Input>
          <select
            value={categoryId}
            onChange={(e) => setcategoryId(e.target.value)}
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
            name="productImage"
            onChange={(e) => {
              setproductImage(e.target.files[0]);
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
        <Button variant="primary" onClick={handleShow}>
          Add
        </Button>
      </Layout>
    </>
  );
};

export default Products;
