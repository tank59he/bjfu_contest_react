// 在真实环境中，如果使用firebase这种第三方auth服务的话，本文件不需要开发者开发

import { User } from "types/user";
import { Result } from "./types/result";

const apiUrl = process.env.REACT_APP_API_URL;

export const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = (result: Result<User>) => {
  window.localStorage.setItem(localStorageKey, result.object.token || "");
  return result.object;
};

export interface LoginForm {
  account: string;
  password: string;
}

export const login = (data: LoginForm) => {
  return fetch(`${apiUrl}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export interface RegisterForm {
  account: string;
  email: string;
  password: string;
  type: "TEACHER" | "STUDENT";
  status: string;
  name: string;
  gender?: "MALE" | "FEMALE" | "SECRECY";
  college: string;
  major?: string;
  introduction?: string;
}

export const register = (data: RegisterForm) => {
  return fetch(`${apiUrl}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export interface ActivateForm {
  token: string;
}

export const activate = (data: ActivateForm) => {
  return fetch(`${apiUrl}/user/activate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
