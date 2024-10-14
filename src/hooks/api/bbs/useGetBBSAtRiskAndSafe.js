"use client";

import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const useGetBBSAtRiskAndSafe = (queries) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ["bbs-at-risk-and-safe", queries],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/bbs/at-risk-and-safe", {
        params: queries,
      });

      return data;
    },
  });
};

export default useGetBBSAtRiskAndSafe;
