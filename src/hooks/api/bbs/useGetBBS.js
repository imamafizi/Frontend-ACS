"use client";

import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const useGetBBS = (queries) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ["bbs", queries],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/bbs", {
        params: queries,
      });

      return data;
    },
  });
};

export default useGetBBS;
