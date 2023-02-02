import { RichTextInput } from "ra-input-rich-text";
import React from "react";
import { DateField, Edit, Labeled, SimpleForm, TextInput } from "react-admin";

const EditBlog = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />

        <Labeled source="Title">
          <TextInput source="title" />
        </Labeled>

        <Labeled source="Published Time">
          <DateField disabled source="published_at" />
        </Labeled>

        <RichTextInput source="body" />
      </SimpleForm>
    </Edit>
  );
};

export default EditBlog;
