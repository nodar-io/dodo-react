export const getProductPath = el => {
  let path = "";

  switch (el.type) {
    case "pizza":
      path = `/pizza/${el.id}`;
      break;
    case "snack":
      path = `/snack/${el.id}`;
      break;
    case "dessert":
      path = `/dessert/${el.id}`;
      break;
    case "drinks":
      path = `/drinks/${el.id}`;
      break;
    case "others":
      path = `/others/${el.id}`;
      break;
    default:
      console.error("Invalid product type in the element");
      break;
  }

  return path;
};
