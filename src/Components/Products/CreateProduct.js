import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  SelectInput,
  NumberInput,
  useRecordContext,
} from "react-admin";

const CreateProduct = (props) => {
  const record = useRecordContext();
  console.log(record);

  return (
    <Create {...props} redirect="list">
      <SimpleForm>
        <TextInput source="title" required fullWidth resettable />

        <TextInput
          source="description"
          multiline
          fullWidth
          required
          resettable
        />

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
            { id: "dollznmore", name: "Dollz'n More" },
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
            { id: true, name: "True" },
            { id: false, name: "False" },
          ]}
          required
        />

        <SelectInput
          source="newArrival"
          choices={[
            { id: true, name: "True" },
            { id: false, name: "False" },
          ]}
        />

        <ImageInput
          accept="image/*"
          multiple={true}
          source="images"
          name="images"
          required
        >
          <ImageField
            source="src"
            sx={{ width: "200px", marginRight: "10px" }}
          />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default CreateProduct;
