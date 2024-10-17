"use client";

import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const useGetSWA = (queries) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ["swa", queries],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/swa", {
        params: queries,
      });

      return data;
    },
  });
};

export default useGetSWA;
