import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

let refresh = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    console.log(`interceptor error: ${error}`);
    console.log(JSON.stringify(error.response));
    if (error.isAxiosError) {
      window.location.href = `/error/${encodeURIComponent("無法與伺服器連線")}`;

      return Promise.reject(error);
    }
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      const response = await axios.post(
        "auth/refresh",
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;

        // re-execute previous request
        return axios(error.config);
      }
    }
    refresh = false;

    return error;
  }
);
