import { Post } from "@/types/Post";
import { User } from "@/types/User";
import axios from "axios";

const req = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async (
  limit: number = 10,
  start: number = 0
): Promise<Post[]> => {
  const result = await req.get(`/posts?_start=${start}&_limit=${limit}`);
  return result.data;
};

export const getPost = async (id: number): Promise<Post> => {
  const result = await req.get(`/posts/${id}`);
  return result.data;
};

export const getUsers = async (): Promise<User[]> => {
  const result = await req.get("/users");
  return result.data;
};

export const getUser = async (id: number): Promise<User> => {
  const result = await req.get(`/users/${id}`);
  return result.data;
};
