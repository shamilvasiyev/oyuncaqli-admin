import React from "react";
import { useRecordContext } from "react-admin";

import styles from "./ShowOrderProducts.module.css";

const ShowOrderPorducts = (props) => {
  const orderProds = useRecordContext(props);

  return (
    <div className={styles.orderProdContainer}>
      {orderProds.products.map((p, i) => (
        <div className={styles.orderProdWrapper} key={i}>
          <div className={styles.orderProdImageBox}>
            <img
              src={`${process.env.REACT_APP_BASE_URL}/${p.image.imageUrl}`}
              alt={p.title}
            />
          </div>

          <div className={styles.paragraph__header}>
            <h2>Məhsulun adı</h2>

            <p>{p.title}</p>
          </div>

          <div className={styles.paragraph__header}>
            <h2>Sifarişin miqdarı</h2>

            <p>{p.quantity} ədəd</p>
          </div>

          <div className={styles.paragraph__header}>
            <h2>Sifarişin olunan məhsulun qiyməti</h2>

            <p>{p.price} manat</p>
          </div>

          <div className={styles.paragraph__header}>
            <h2>Sifarişin ümumi məbləği</h2>

            <p>{p.totalPrice} manat</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowOrderPorducts;
