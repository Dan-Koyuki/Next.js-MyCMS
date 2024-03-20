import axios, { AxiosError, AxiosResponse } from "axios";
import { baseURL } from "../utils/env.utils";

interface dataResponse {
  data: {
    token: string;
  };
  status: string;
}

interface AccountResponse {
  data: { token: string };
  error: AxiosError | null;
  isLoading: boolean;
  isSuccess: boolean;
}

export type AuthProps = {
  modalSetting: boolean;
  closeFunc: () => void;
  tokenSetter: () => void;
};

interface RegisterModel {
  username: string;
  password: string;
  email: string;
}

interface LoginModel {
  username: string;
  password: string;
}

export const register = async (AccountData: RegisterModel) => {
  const url = baseURL + "api/auth/register";

  const Response: AccountResponse = {
    data: {
      token: "",
    },
    error: null,
    isLoading: false,
    isSuccess: false,
  };

  Response.isLoading = true;
  try {
    const response: AxiosResponse<dataResponse> = await axios.post(
      url,
      AccountData
    );
    Response.data = response.data.data;
    Response.isSuccess = true;
    localStorage.setItem("token", Response.data.token);
  } catch (error: any) {
    Response.error = error;
  } finally {
    Response.isLoading = false;
  }

  console.log(Response);
};

export const login = async (AccountData: LoginModel) => {
  const url = baseURL + "api/auth/login";

  const Response: AccountResponse = {
    data: {
      token: "",
    },
    error: null,
    isLoading: false,
    isSuccess: false,
  };

  Response.isLoading = true;
  try {
    const response: AxiosResponse<dataResponse> = await axios.post(
      url,
      AccountData
    );
    Response.data = response.data.data;
    Response.isSuccess = true;
    localStorage.setItem("token", Response.data.token);
  } catch (error: any) {
    Response.error = error;
  } finally {
    Response.isLoading = false;
  }

  console.log(Response);
};

export const verify = async (token: string) : Promise<boolean> => {
  const url = baseURL + "api/auth/verify";

  const Response = {
    status: "",
    message: "",
    error: "",
    isLoading: false
  }

  Response.isLoading = true;
  try {
    const response: AxiosResponse = await axios.get(url, {headers: {authorization: token}});
    Response.status = response.data.status;
    Response.message = response.data.message;
  } catch (error : any) {
    Response.error = error;
    return false;
  } finally {
    Response.isLoading = false;
  }

  return true;
}
