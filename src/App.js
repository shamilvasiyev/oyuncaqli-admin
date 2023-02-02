import * as React from "react";
import { Admin, Resource } from "react-admin";

import "./App.css";

import Products from "./Components/Products/Products";
import EditProducts from "./Components/Products/EditProducts";
import CreateProduct from "./Components/Products/CreateProduct";
import ShowProduct from "./Components/Products/ShowProduct";

import Blogs from "./Components/Blogs/Blogs";
import CreateBlog from "./Components/Blogs/CreateBlog";

import OrdersList from "./Components/Orders/Orders";
import ShowOrder from "./Components/Orders/ShowOrder";

import dataProvider from "./Utils/dataProvider";
import authProvider from "./Utils/authProvider";
import ShowBlog from "./Components/Blogs/ShowBlog";
import EditBlog from "./Components/Blogs/EditBlog";

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource
      name="products"
      list={Products}
      show={ShowProduct}
      edit={EditProducts}
      create={CreateProduct}
    />

    <Resource
      name="blogs"
      list={Blogs}
      show={ShowBlog}
      edit={EditBlog}
      create={CreateBlog}
    />

    <Resource name="orders" list={OrdersList} show={ShowOrder} />
  </Admin>
);

export default App;
