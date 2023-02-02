import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  ShowButton,
} from "react-admin";

const OrdersList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="address" />
        <TextField source="phone" />
        <ShowButton />
        <DeleteButton label="Delete" />
      </Datagrid>
    </List>
  );
};

export default OrdersList;
