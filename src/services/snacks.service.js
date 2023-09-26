import axios from "axios";

export const SnackService = {
  async getAllSnacks() {
    const {
      data: { data },
    } = await axios.get("https://w3ld2h91y2.mockify.ru/api/snack");
    return data;
  },

  async getSnackById(id) {
    const data = await axios.get(
      `https://w3ld2h91y2.mockify.ru/api/snack/${id}`
    );
    return data;
  },
};
