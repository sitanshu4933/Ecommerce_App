import React from "react";
import Header from "../Header/index";
import { Row,Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.sidebar ? (
        <Row>
          <Col md={2} className="sidebar">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/orders"}>orders</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>products</NavLink>
              </li>
            </ul>
          </Col>
          <Col md={10} style={{ marginLeft: "auto" }}>
            {props.children}
          </Col>
        </Row>
      ) : (
        props.children
      )}
    </>
  );
};

export default Layout;
