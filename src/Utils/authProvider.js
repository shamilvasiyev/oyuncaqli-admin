const url = `${process.env.REACT_APP_BASE_URL}/auth/signin`;

const authProvider = {
  login: async ({ username, password }) => {
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    try {
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      const { token } = await response.json();

      localStorage.setItem("token", JSON.stringify(token));
    } catch {
      throw new Error("Network error");
    }
  },

  // login: ({ username, password }) => {
  //   const request = new Request(url, {
  //     method: "POST",
  //     body: JSON.stringify({ username, password }),
  //     headers: new Headers({ "Content-Type": "application/json" }),
  //   });
  //   return fetch(request)
  //     .then((response) => {
  //       if (response.status < 200 || response.status >= 300) {
  //         throw new Error(response.statusText);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       localStorage.setItem("token", JSON.stringify(data.token));

  //       return { redirectTo: "products" };
  //     })
  //     .catch(() => {
  //       throw new Error("Network error");
  //     });
  // },

  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },

  checkAuth: () =>
    localStorage.getItem("token") ? Promise.resolve() : Promise.reject(),

  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getIdentity: () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      return Promise.resolve({ token });
    } catch (error) {
      return Promise.reject(error);
    }
  },

  getPermissions: () => Promise.resolve(""),
};

export default authProvider;
