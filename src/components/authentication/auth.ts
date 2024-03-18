import axios, { AxiosError, AxiosResponse } from "axios";
import { baseURL } from "../utils/env.utils";

interface dataResponse {
  data: {
    token: string;
  };
  status: string
}

interface AccountResponse {
  data: {token: string};
  error: AxiosError | null;
  isLoading: boolean;
  isSuccess: boolean;
}

export type AuthProps = {
  modalSetting: boolean;
  closeFunc: () => void;
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

export const register = async (AccountData: RegisterModel) : Promise<AccountResponse> => {

  const url = baseURL + "api/auth/register";

  const Response: AccountResponse = {
    data: {
      token: ""
    },
    error: null,
    isLoading: false,
    isSuccess: false
  };

  Response.isLoading = true;
  try {
    const response: AxiosResponse<dataResponse> = await axios.post(url, AccountData);
    Response.data = response.data.data;
    Response.isSuccess = true;
  } catch (error: any) {
    Response.error = error;
  } finally {
    Response.isLoading = false;
  }

  console.log(Response);

  return Response;
};

export const login = async (
  AccountData: LoginModel
): Promise<AccountResponse> => {
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
  } catch (error: any) {
    Response.error = error;
  } finally {
    Response.isLoading = false;
  }

  console.log(Response);

  return Response;
};