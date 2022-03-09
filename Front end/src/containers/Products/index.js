import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import Input from "../../components/UI/input";
import { Button, Table } from "react-bootstrap";
import { addProduct } from "../../actions";
import Modal from "../../components/UI/Modal";
import "./style.css";


const Products = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const [show, setShow] = useState(false);
  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductQuantity, setProductQuantity] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [productImages, setproductImages] = useState("");
  const [categoryId, setcategoryId] = useState("");

  const handleClose = () => {
    const form = new FormData();
    form.append("name", ProductName);
    form.append("price", ProductPrice);
    form.append("quantity", ProductQuantity);
    form.append("description", ProductDescription);
    form.append("category", categoryId);
    for (let pic of productImages) {
      form.append("productPicture", pic);
    }
    dispatch(addProduct(form));
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
      <Modal
        show={show}
        onHide={handleClose}
        title={"Add New Product"}
        handleClose={handleClose}
      >
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
        {productImages.length > 0
          ? productImages.map((img, index) => <div key={index}>{img.name}</div>)
          : null}
        <Input
          type="file"
          name="productImage"
          onChange={(e) => {
            setproductImages([...productImages, e.target.files[0]]);
          }}
        ></Input>
      </Modal>
      <Layout sidebar>
        <Button variant="primary" onClick={handleShow}>
          Add
        </Button>
      </Layout>
      <div className="table">
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Products;
