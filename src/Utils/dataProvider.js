import { combineDataProviders } from "react-admin";

import productDataProvider from "./pruductDataProvider";
import blogDataProvider from "./blogDataProvider";
import orderProvider from "./orderProvider";

const dataProvider = combineDataProviders((resource) => {
  switch (resource) {
    case "products":
      return productDataProvider;
    case "blogs":
      return blogDataProvider;
    case "orders":
      return orderProvider;
    default:
      throw new Error(`Unknown resource: ${resource}`);
  }
});

export default dataProvider;
