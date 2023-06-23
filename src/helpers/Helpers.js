import axios from "axios";

const baseURL = "http://localhost:3000/tasks/";

export const api = {
  createtask: async (payload) => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  },
};
