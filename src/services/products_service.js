import { apiFetch, BASE_URL } from "./api_fetch.js";

function ProductsService() {
  if (!ProductsService.instance) {
    ProductsService.instance = this;
  }
  return ProductsService.instance;
}

ProductsService.prototype.list = () =>
  apiFetch(`${BASE_URL}/products`, {
    method: "GET",
  });

ProductsService.prototype.create = (username, password, birthdate, gender) =>
  apiFetch(`${BASE_URL}/products/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify({ username, password, birthdate, gender }),
  });

ProductsService.prototype.update = (id, done) =>
  apiFetch(`${BASE_URL}/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify({ done }),
  });

ProductsService.prototype.delete = (id) =>
  apiFetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
    Authorization: `Token token=${sessionStorage.getItem("token")}`,
  });

export default ProductsService;
