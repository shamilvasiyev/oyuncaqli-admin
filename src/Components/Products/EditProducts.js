import React from "react";
import {
  Edit,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
  FormDataConsumer,
  Labeled,
  Toolbar,
  SaveButton,
  DeleteButton,
  required,
} from "react-admin";

const EditProducts = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />

        <TextInput source="title" required />

        <TextInput source="description" fullWidth multiline required />

        <SelectInput
          source="category"
          choices={[
            { id: "oğlan", name: "Oğlan" },
            { id: "qız", name: "Qız" },
            { id: "zəka", name: "Zəka" },
            { id: "musiqi", name: "Musiqi" },
            { id: "nəqliyyat", name: "Nəqliyyat" },
            { id: "digər", name: "Digər" },
          ]}
          required
        />

        <SelectInput
          source="age"
          choices={[
            { id: "1-2", name: "1-2" },
            { id: "2-4", name: "2-4" },
            { id: "4-6", name: "4-6" },
            { id: "5-10", name: "5-10" },
            { id: "12", name: "12" },
          ]}
          required
        />

        <SelectInput
          source="brand"
          choices={[
            { id: "lego", name: "Lego" },
            { id: "barbie", name: "Barbie" },
            { id: "blx", name: "BLX" },
            { id: "crafy", name: "Crafy" },
            { id: "lego-duplo", name: "Lego-Duplo" },
            { id: "fisher-price", name: "Fisher-Price" },
            { id: "hot-wheels", name: "Hot-Wheels" },
            { id: "lol", name: "LOL" },
            { id: "play-doh", name: "Play-Doh" },
          ]}
          required
        />

        <NumberInput source="price" required />

        <NumberInput source="onSalePrice" />

        <SelectInput
          source="onStock"
          choices={[
            { id: "true", name: "True" },
            { id: "false", name: "False" },
          ]}
          required
        />

        <SelectInput
          source="newArrival"
          choices={[
            { id: "true", name: "True" },
            { id: "false", name: "False" },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};

export default EditProducts;

// Mens Cotton Jacket
