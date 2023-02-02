import React from "react";
import { useRecordContext } from "react-admin";

const ShowBlogImage = (props) => {
  const blogData = useRecordContext(props);

  console.log(blogData);

  return (
    <div style={{ maxWidth: "50%" }}>
      <img
        style={{ width: "100%" }}
        src={`${process.env.REACT_APP_BASE_URL}/${blogData?.image?.imageUrl}`}
        alt={blogData?.title}
      />
    </div>
  );
};

export default ShowBlogImage;
