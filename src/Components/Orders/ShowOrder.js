import {
  Show,
  SimpleShowLayout,
  TextField,
  Labeled,
  NumberField,
  useGetList,
} from "react-admin";

import ShowOrderPorducts from "./ShowOrderPorducts";

const ShowOrder = (props) => {
  const { data } = useGetList("orders");

  return (
    <Show {...props}>
      <SimpleShowLayout>
        <Labeled label="Müştəri adı">
          <TextField source="name" />
        </Labeled>

        <Labeled label="Ünvan">
          <TextField source="address" />
        </Labeled>

        <Labeled label="Telefon">
          <TextField source="phone" />
        </Labeled>

        <Labeled label="Ümumi məbləğ">
          <NumberField source="totalPrice" />
        </Labeled>

        <ShowOrderPorducts props={data} />
      </SimpleShowLayout>
    </Show>
  );
};

export default ShowOrder;
