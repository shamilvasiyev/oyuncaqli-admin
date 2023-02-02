import {
  Show,
  SimpleShowLayout,
  TextField,
  Labeled,
  ImageField,
  useGetList,
} from "react-admin";

import ShowImages from "./ShowImages";

const ShowProduct = (props) => {
  const { data } = useGetList("products");

  return (
    <Show {...props}>
      <SimpleShowLayout>
        <Labeled label="Title">
          <TextField source="title" />
        </Labeled>

        <Labeled label="Description">
          <TextField source="description" />
        </Labeled>

        <Labeled label="Category">
          <TextField source="category" />
        </Labeled>

        <Labeled label="Age">
          <TextField source="age" />
        </Labeled>

        <Labeled label="Brand">
          <TextField source="brand" />
        </Labeled>

        <Labeled label="Price">
          <TextField source="price" />
        </Labeled>

        <Labeled label="onSalePrice">
          {<TextField source="onSalePrice" />}
        </Labeled>

        <Labeled label="onStock">
          <TextField source="onStock" />
        </Labeled>

        <Labeled label="newArrival">
          <TextField source="newArrival" />
        </Labeled>

        <ShowImages props={data} />
        {/* <Labeled label="Images">
          <ImageField source="images" src="imageUrl" title="alt" />
        </Labeled> */}
      </SimpleShowLayout>
    </Show>
  );
};

export default ShowProduct;
