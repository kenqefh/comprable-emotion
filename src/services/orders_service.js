import { apiFetch, BASE_URL } from "./api_fetch.js";

function OrdersService() {
  if (!OrdersService.instance) {
    OrdersService.instance = this;
  }
  return OrdersService.instance;
}

OrdersService.prototype.create = (order) => console.log(order);
/*
 * Cuando el endpoint esté listo, probablemente usaremos algo como esto
 */
// apiFetch(`${BASE_URL}/orders/`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Token token=${sessionStorage.getItem("token")}`,
//   },
//   body: JSON.stringify({ order }),
// });

export default OrdersService;
