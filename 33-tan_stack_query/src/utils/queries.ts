import { useQuery } from "@tanstack/react-query";
import { getPost, getPosts, getUser, getUsers } from "./api";

export const usePosts = () => {
  return useQuery({ queryKey: ["posts"], queryFn: getPosts });
};

export const usePost = (id: number) => {
  return useQuery({ queryKey: ["posts", id], queryFn: () => getPost(id) });
};

export const useUsers = () => {
  return useQuery({ queryKey: ["users"], queryFn: getUsers });
};

export const useUser = (id: number) => {
  return useQuery({ queryKey: ["users", id], queryFn: () => getUser(id) });
};