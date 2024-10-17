"use client";

import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const useGetBBSAtRiskCategories = (queries) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ["bbs-at-risk-categories", queries],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/bbs/at-risk-categories", {
        params: queries,
      });

      return data;
    },
  });
};

export default useGetBBSAtRiskCategories;
