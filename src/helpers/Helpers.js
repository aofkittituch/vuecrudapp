import axios from "axios";

const baseURL = "http://localhost:3000/tasks/";

export const api = {
  createtask: async (payload) => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  },
  gettasks: async () => {
    const res = await axios.get(baseURL);
    return res.data;
  },
  deletetask: async (id) => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  },
  gettask: async (id) => {
    const res = await axios.get(baseURL + id);
    return res.data;
  },
  updatetask: async (payload) => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  },
};
