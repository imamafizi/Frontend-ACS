"use client";

import useAxios from "@/hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const useCreateBBS = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();
  const { id } = useSelector((state) => state.user);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload) => {
      const { data } = await axiosInstance.post(`/bbs/${id}`, payload);
      return data;
    },
    onSuccess: () => {
      toast.success("Data submitted successfully!");
      queryClient.invalidateQueries({ queryKey: ["bbs"] });
      router.push("/showbbs");
    },
    onError: () => {
      toast.error("Failed to submit data. Please try again.");
    },
  });
};

export default useCreateBBS;
