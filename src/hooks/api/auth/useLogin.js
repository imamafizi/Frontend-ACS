"use client";

import useAxios from "@/hooks/useAxios";
import { loginAction } from "@/redux/slices/userSlices";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const useLogin = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async (payload) => {
      const { data } = await axiosInstance.post(`/users/login`, payload);
      return data;
    },
    onSuccess: (data) => {
      toast.success("Login successfull!");
      dispatch(loginAction({ ...data.data, token: data.token }));
      router.push("/");
    },
    onError: () => {
      toast.error("Login failed. Please try again.");
    },
  });
};

export default useLogin;
