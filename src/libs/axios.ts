import axios from "axios";
import { useAuthStore } from "../store/auth.state";

const AuthStore = useAuthStore()

const AuthApi = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});

AuthApi.interceptors.request.use(config => {
    config.headers = {
      Authorization: `Bearer ${AuthStore.token}`,
    };
    return config
})

export default AuthApi 