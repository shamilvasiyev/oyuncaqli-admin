import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ShowButton,
} from "react-admin";

const ProductsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="title" />
        <TextField source="price" />
        <ShowButton />
        <EditButton label="Edit" resource="/products" />
        <DeleteButton label="Delete" />
      </Datagrid>
    </List>
  );
};

export default ProductsList;
