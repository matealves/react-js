import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPost, getPosts, getUser, getUsers } from "./api";

export const usePosts = (limit: number, start: number) => {
  return useQuery({
    queryKey: ["posts", { limit, start }],
    queryFn: () => getPosts(limit, start),
    // placeholderData: keepPreviousData,
    // staleTime: 5 * (60 * 1000), // 5 minutos
  });
};

export const usePost = (id: number) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};

export const useUser = (id: number) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => getUser(id),
  });
};
