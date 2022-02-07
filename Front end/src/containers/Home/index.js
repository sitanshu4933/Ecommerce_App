import React from "react";
import { Col, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import "./style.css";
import { NavLink } from "react-router-dom";
/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <>
      <Layout sidebar>
        Home
      </Layout>
    </>
  );
};

export default Home;
