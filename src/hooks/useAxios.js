"use client";

import { axiosInstance } from "@/lib/axios";
import { logoutAction } from "@/redux/slices/userSlices";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAxios = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    const requestIntercept = axiosInstance.interceptors.request.use(
      async (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseIntercept = axiosInstance.interceptors.response.use(
      (response) => response,
      (err) => {
        if (
          err.response.data.message === "Token expired" ||
          err.response.data.message === "Token is missing" ||
          err.response.data.message === "Invalid token"
        ) {
          dispatch(logoutAction());
          queryClient.removeQueries();
        }
        return Promise.reject(err);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
      axiosInstance.interceptors.response.eject(responseIntercept);
    };
  }, [dispatch, queryClient, token]);

  return { axiosInstance };
};

export default useAxios;
