import { fetchUtils } from "react-admin";
import { stringify } from "query-string";
import restServerProvider from "ra-data-json-server";

const servicesHost = process.env.REACT_APP_BASE_URL;

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = JSON.parse(localStorage.getItem("token"));
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = restServerProvider(servicesHost, httpClient);

const productDataProvider = {
  ...dataProvider,
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };

    const url = `${servicesHost}/${resource}?${stringify(query)}`;

    const { headers, json } = await httpClient(url);

    return {
      data: json.map((resource_1) => ({ ...resource_1, id: resource_1._id })),
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    };
  },

  getOne: (resource, params) =>
    httpClient(`${servicesHost}/${resource}/${params.id}`).then(({ json }) => ({
      data: { ...json, id: json._id },
    })),

  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${servicesHost}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url);
    return {
      data: json.map((resource_1) => ({ ...resource_1, id: resource_1._id })),
    };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${servicesHost}/${resource}?${stringify(query)}`;

    const { headers, json } = await httpClient(url);
    return {
      data: json.map((resource_1) => ({ ...resource_1, id: resource_1._id })),
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    };
  },

  //   updateMany: async (resource, params) => {
  //     const query = {
  //       filter: JSON.stringify({ id: params.ids }),
  //     };
  //     const { json } = await httpClient(
  //       `${servicesHost}/${resource}?${stringify(query)}`,
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(params.data),
  //       }
  //     );
  //     return { data: json };
  //   },

  //   update: (resource, params) => {
  //     if (!params.data.images) {
  //       return dataProvider.create(resource, params);
  //     }

  //     let formData = new FormData();

  //     formData.append("title", params.data.title);
  //     formData.append("description", params.data.description);
  //     formData.append("category", params.data.category);
  //     formData.append("brand", params.data.brand);
  //     formData.append("age", params.data.age);
  //     formData.append("price", params.data.price);
  //     formData.append("onSalePrice", params.data.onSalePrice);
  //     formData.append("newArrival", params.data.newArrival);
  //     formData.append("onStock", params.data.onStock);

  //     // for (let i = 0; i < params.data.images.length; i++) {
  //     //   if (params.data.images[i]?.rawFile) {
  //     //     formData.append("images", params.data.images[i].rawFile);
  //     //   }
  //     // }

  //     return httpClient(`${servicesHost}/${resource}/${params.id}`, {
  //       method: "PUT",
  //       body: formData,
  //     }).then(({ json }) => ({ ...json, id: json._id }));
  //   },

  //   create: (resource, params) => {
  //     if (!params.data.images) {
  //       return dataProvider.create(resource, params);
  //     }

  //     let formData = new FormData();

  //     formData.append("title", params.data.title);
  //     formData.append("description", params.data.description);
  //     formData.append("category", params.data.category);
  //     formData.append("brand", params.data.brand);
  //     formData.append("age", params.data.age);
  //     formData.append("price", params.data.price);
  //     formData.append("onSalePrice", params.data.onSalePrice || null);
  //     formData.append("onStock", params.data.onStock);
  //     formData.append("newArrival", params.data.newArrival || null);

  //     for (let i = 0; i < params.data.images.length; i++) {
  //       formData.append("images", params.data.images[i].rawFile);
  //     }

  //     return httpClient(`${servicesHost}/${resource}`, {
  //       method: "POST",
  //       body: formData,
  //     }).then(({ json }) => ({
  //       data: { ...params.data, id: json._id },
  //     }));
  //   },

  delete: (resource, params) =>
    httpClient(`${servicesHost}/${resource}/${params.id}`, {
      method: "DELETE",
      // body: JSON.stringify(params.id),
    }).then(({ json }) => ({
      ...json,
      id: json._id,
    })),

  //   deleteMany: async (resource, params) => {
  //     const query = {
  //       filter: JSON.stringify({ id: params.ids }),
  //     };
  //     const { json } = await httpClient(
  //       `${servicesHost}/${resource}?${stringify(query)}`,
  //       {
  //         method: "DELETE",
  //         body: JSON.stringify(params.data),
  //       }
  //     );
  //     return { data: json };
  //   },
};

export default productDataProvider;
