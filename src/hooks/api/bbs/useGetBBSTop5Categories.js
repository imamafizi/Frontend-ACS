"use client";

import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const useGetBBSTop5Categories = (queries) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ["bbs-top-5", queries],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/bbs/top-5", {
        params: queries,
      });

      return data;
    },
  });
};

export default useGetBBSTop5Categories;
