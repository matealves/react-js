import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { getPost, getPosts, getUser, getUsers } from "./api";
import { postsInitialData } from "@/data/postsInitialData";
import { queryClient } from "./queryClient";

export const usePosts = (limit: number, start: number) => {
  return useQuery({
    queryKey: ["posts", { limit, start }],
    queryFn: () => getPosts(limit, start),
    // initialData: postsInitialData,
    // placeholderData: keepPreviousData,
    // placeholderData: postsInitialData,
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

export const useUsersPrefetch = async () => {
  const queryClient = useQueryClient();

  await queryClient.prefetchQuery({
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

export const invalidatePosts = () => {
  queryClient.invalidateQueries({
    queryKey: ["posts"],
    // exact: true,
  });
};
