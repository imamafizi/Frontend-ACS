"use client";

import useAxios from "@/hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useRegister = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();

  return useMutation({
    mutationFn: async (payload) => {
      const { data } = await axiosInstance.post(`/users`, payload);
      return data;
    },
    onSuccess: () => {
      toast.success("Register successfull!");
      router.push("/login");
    },
    onError: () => {
      toast.error("Registration failed. Please try again.");
    },
  });
};

export default useRegister;
