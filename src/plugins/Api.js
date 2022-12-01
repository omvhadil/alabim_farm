import axios from "axios";

const instance = axios.create({
  baseURL: "https://6381d5c59842ca8d3c9a9d36.mockapi.io",
});

const pathKambing = {
  jmlKambing: "/db_kambing",
  // delKambing: "/db_kambing/" + id,
};

const getData = async () => await instance.get(pathKambing.jmlKambing);
const postData = async (data) =>
  await instance.post(pathKambing.jmlKambing, data);
// const delData = async (id) =>
//   await instance.delete(pathKambing.jmlKambing + "/" + id);
// const deleData = async (id) =>
//   await instance.delete(`${pathKambing.jmlKambing}/${id}`);
// export const delData = async (id) =>
//   await axios.get(
//     "https://6381d5c59842ca8d3c9a9d36.mockapi.io/db_kambing/" + id
//   );
export { getData, postData };
