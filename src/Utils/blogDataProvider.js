import { fetchUtils } from "react-admin";
import { stringify } from "query-string";
import restServerProvider from "ra-data-json-server";

const servicesHost = process.env.REACT_APP_BASE_URL;

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = restServerProvider(servicesHost, httpClient);

const blogDataProvider = {
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

  updateMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const { json } = await httpClient(
      `${servicesHost}/${resource}?${stringify(query)}`,
      {
        method: "PUT",
        body: JSON.stringify(params.data),
      }
    );
    return { data: json };
  },

  update: (resource, params) => {
    let formData = new FormData();

    formData.append("title", params.data.title);
    formData.append("body", params.data.body);

    return httpClient(`${servicesHost}/${resource}/${params.id}`, {
      method: "PUT",
      body: formData,
    }).then(({ json }) => ({ ...json, id: json._id }));
  },

  create: (resource, params) => {
    let formData = new FormData();

    formData.append("title", params.data.title);
    formData.append("image", params.data.image.rawFile);
    formData.append("published_at", params.data.published_at);
    formData.append("body", params.data.body);

    return httpClient(`${servicesHost}/${resource}`, {
      method: "POST",
      body: formData,
    }).then(({ json }) => ({
      data: { ...params.data, id: json._id },
    }));
  },

  delete: (resource, params) =>
    httpClient(`${servicesHost}/${resource}/${params.id}`, {
      method: "DELETE",
      // body: JSON.stringify(params.id),
    }).then(({ json }) => ({
      ...json,
      id: json._id,
    })),

  deleteMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const { json } = await httpClient(
      `${servicesHost}/${resource}?${stringify(query)}`,
      {
        method: "DELETE",
        body: JSON.stringify(params.data),
      }
    );
    return { data: json };
  },
};

export default blogDataProvider;
