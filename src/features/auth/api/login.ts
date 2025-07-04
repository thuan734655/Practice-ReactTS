import { useToast } from "@/components/ui/toast";
import { axiosClient } from "@/lib/axios";
import { loginResponse } from "@/types/auth";
import { ResponseMessage } from "@/types/common";
import { setLocalStorage } from "@/utils/localStorage";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "required").email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const postLogin = (data: z.infer<typeof loginSchema>) =>
  axiosClient.post("/login", data);

export const useLogin = () => {
  const navigation = useNavigate();
  const { addToast } = useToast();
  return useMutation({
    mutationFn: postLogin,
    onSuccess: (res: AxiosResponse<loginResponse>) => {
      addToast({
        title: "Login",
        message: "Successful",
        type: "success",
      });
      const token = res.data.accessToken;
      setLocalStorage("token", token);
      navigation("/home");
    },
    onError: (e: AxiosError) => {
      const res = e.response?.data as ResponseMessage;

      addToast({
        title: "Login",
        message: res.messages,
        type: "error",
      });
    },
  });
};
