import axios from "axios";

export const PizzaService = {
  async getAllPizzas() {
    const {
      data: { data },
    } = await axios.get("https://w3ld2h91y2.mockify.ru/api/pizza");
    return data;
  },

  async getPizzaById(id) {
    const data = await axios.get(
      `https://w3ld2h91y2.mockify.ru/api/pizza/${id}`
    );
    return data;
  },
};
