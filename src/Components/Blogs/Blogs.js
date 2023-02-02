import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ShowButton,
} from "react-admin";

const Blogs = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="title" />

        <ShowButton />

        <EditButton label="Edit" resource="/blogs" />

        <DeleteButton label="Delete" />
      </Datagrid>
    </List>
  );
};

export default Blogs;
