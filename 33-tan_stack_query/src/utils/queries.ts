import { useQuery } from "@tanstack/react-query";
import { getPost, getPosts, getUser, getUsers } from "./api";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 5 * (60 * 1000), // 5 minutos
  });
};

export const usePost = (id: number) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
    staleTime: Infinity,
  });
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    staleTime: 10 * (60 * 1000),
  });
};

export const useUser = (id: number) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => getUser(id),
    staleTime: Infinity,
  });
};
