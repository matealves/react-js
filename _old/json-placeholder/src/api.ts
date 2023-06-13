import axios from "axios";
const url = "https://jsonplaceholder.typicode.com";

// const axiosInstance = axios.create({
//   baseURL: url,
// });

export const api = {
  getAllPosts: async () => {
    // GET Usando axios
    // const response = await axiosInstance.get("/posts");
    const response = await axios.get(`${url}/posts`);
    return response.data;

    // GET Usando fetch
    // const response = fetch(`${url}/posts`);
    // const json = await (await response).json();
    // return json;
  },
  addNewPosts: async (title: string, body: string, userId: number) => {
    // POST Usando axios
    const response = await axios.post(`${url}/posts`, {
      title,
      body,
      userId,
    });
    console.log(response.data);
    return response.data;

    // POST Usando fetch
    // const response = fetch(`${url}/posts`, {
    //   method: "POST",
    //   body: JSON.stringify({ title, body, userId }),
    //   headers: { "Content-Type": "application/json" },
    // });

    // const json = await (await response).json();
    // console.log(json);
    // return json;
  },
};
