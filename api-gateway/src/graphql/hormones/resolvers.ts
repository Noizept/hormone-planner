import { getAllHormones } from "../../api/hormonesAPI";

export default {
  Query: {
    allHormones: async () => await getAllHormones(),
  },
};
