import axios from "axios";

class AxiosService {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
        //'Authorization': 'Bearer <your_token_here>'
      },
    });

    this.instance.interceptors.request.use(
      this.handleRequestSuccess,
      this.handleRequestError,
    );

    this.instance.interceptors.response.use(
      this.handleResponseSuccess,
      this.handleResponseError,
    );
  }

  handleRequestSuccess(config) {
    return config;
  }

  handleRequestError(error) {
    return Promise.reject(error);
  }

  handleResponseSuccess(response) {
    return response.data;
  }

  handleResponseError(error) {
    return Promise.reject(error);
  }

  async getData(endpoint) {
    try {
      const response = await this.instance.get(endpoint);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async postData(endpoint, data) {
    try {
      const response = await this.instance.post(endpoint, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new AxiosService();
