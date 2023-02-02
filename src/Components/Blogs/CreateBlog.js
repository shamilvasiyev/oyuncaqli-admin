import React from "react";
import {
  SimpleForm,
  Create,
  TextInput,
  DateInput,
  ImageField,
  ImageInput,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

const CreateBlog = ({ size, ...props }) => {
  return (
    <Create {...props} redirect="list">
      <SimpleForm>
        <TextInput source="title" required resettable />
        <DateInput source="published_at" />
        <ImageInput accept="image/*" source="Cover Image" name="image" required>
          <ImageField
            source="src"
            sx={{ width: "200px", marginRight: "10px" }}
          />
        </ImageInput>

        <RichTextInput fullWidth source="body" />
      </SimpleForm>
    </Create>
  );
};

export default CreateBlog;
