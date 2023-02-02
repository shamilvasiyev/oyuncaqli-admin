import React from "react";
import { useRecordContext } from "react-admin";

const ShowImages = (props) => {
  const productData = useRecordContext(props);

  return (
    <div style={{ display: "flex", margin: "15px" }}>
      {productData?.images?.map((photo, i) => (
        <div key={i}>
          <img
            style={{ maxWidth: "200px" }}
            src={`${process.env.REACT_APP_BASE_URL}/${photo?.imageUrl}`}
            alt={photo.title}
          />
        </div>
      ))}
    </div>
  );
};

export default ShowImages;
