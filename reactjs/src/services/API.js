import axios from 'axios';
import JSONBig from 'json-bigint';

import { assign } from 'lodash';
import { BASE_API_URL } from '../constants';
import { STORAGE, getLocalStorage } from '../utils';


class AxiosClient {
  constructor() {
    this.axiosClient = axios.create({
      baseURL: BASE_API_URL,
      timeout: 30000,
    });

    this.getExistTokenOnLocalStorage();

    this.axiosClient.defaults.transformResponse = (data) => JSONBig.parse(data);

    this.axiosClient.interceptors.request.use(
      (configure) => configure,
      (error) => Promise.reject(error),
    );
    this.axiosClient.interceptors.response.use(
      (response) => {
        const { status, data } = response;
        return {
          status,
          data,
        };
      },
      (error) => {
        if (error.response) {
          const { data } = error.response;
          const transformError = {
            type: data.error,
            status: data.code,
            key: data.data.key,
            message: data.data.message,
          };
          throw transformError;
        } else {
          throw error;
        }
      },
    );
  }

  setHeader = async (userToken = null) => {
    this.axiosClient.defaults.headers.Authorization = `Bearer ${userToken}`;
  };

  async getExistTokenOnLocalStorage() {
    const userToken = await getLocalStorage(STORAGE.USER_TOKEN);
    if (userToken) {
      this.setHeader(userToken);
    }
  }

  get = async (resource, config = {}) => {
    return this.axiosClient.get(resource, {
      ...assign(config, { headers: this.axiosClient.defaults.headers }),
    });
  };

  post = async (resource, data, config = {}) =>
    this.axiosClient.post(`${resource}`, data, assign(config, this.axiosClient.defaults.headers));

  update = async (resource, data, config = {}) =>
    this.axiosClient.put(`${resource}`, data, assign(config, this.axiosClient.defaults.headers));

  put = async (resource, data, config = {}) =>
    this.axiosClient.put(`${resource}`, data, assign(config, this.axiosClient.defaults.headers));

  patch = async (resource, data, config = {}) =>
    this.axiosClient.patch(`${resource}`, data, assign(config, this.axiosClient.defaults.headers));

  delete = async (resource, data, config = {}) =>
    this.axiosClient.delete(`${resource}`, {
      data,
      ...assign(config, { headers: this.axiosClient.defaults.headers }),
    });
}

export default AxiosClient;
