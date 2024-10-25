import axios, { type AxiosRequestConfig } from "axios";
import { API_URL } from "./config";

interface Client {
  data?: unknown | undefined;
  method?: string | undefined;
  url: string | undefined;
  params?: string | undefined;
  headers?:
    | {
        [key: string]: string;
      }
    | undefined;
}

const REQUEST_TIMEOUT = 5000;

const API = axios.create({
  baseURL: API_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": true,
  },
});

export const ApiClient = async ({
  data,
  method = "GET",
  url,
  params,
  headers,
}: Client) => {
  const requestParams: AxiosRequestConfig = {
    method,
    url,
    params,
    data,
    responseType: "json",
  };

  API.defaults.headers = { ...API.defaults.headers, ...headers };

  return API(requestParams)
  .then((res) => {
    // Успех: возвращаем данные и статус из ответа
    return { data: res.data, status: res.status };
  })
  // .catch((err) => {
  //   // Ошибка: логируем сообщение об ошибке и статус
  //   console.error(
  //     "\nERROR MESSAGE:", err.response.data.message,
  //     "\nSTATUS:", err.response.data.status
  //   );

  //   // Возвращаем объект с теми же полями, что и при успешном выполнении
  //   return { data: err.response.data.message, status: err.response.status };
  // });
};
