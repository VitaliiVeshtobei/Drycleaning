import axios from "axios";

export const getWorkshops = async () => {
  const resp = await axios("/workshop/workshops");
  return resp.data;
};
