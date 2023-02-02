import React from "react";
import {
  Labeled,
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  RichTextField,
  ImageField,
  ImageInput,
} from "react-admin";
import ShowBlogImage from "./ShowBlogImage";

const ShowBlog = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <Labeled label="Title">
          <TextField source="title" />
        </Labeled>

        <Labeled label="Date">
          <DateField source="published_at" />
        </Labeled>

        <Labeled label="Image">
          <ShowBlogImage />
        </Labeled>

        <Labeled label="Body">
          <RichTextField source="body" />
        </Labeled>
      </SimpleShowLayout>
    </Show>
  );
};

export default ShowBlog;
