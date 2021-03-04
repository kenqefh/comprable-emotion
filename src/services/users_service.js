import { apiFetch, BASE_URL } from "./api_fetch.js";

function UsersService() {
  if (!UsersService.instance) {
    UsersService.instance = this;
  }
  return UsersService.instance;
}

UsersService.prototype.list = () =>
  apiFetch(`${BASE_URL}/todos`, {
    method: "GET",
  });

UsersService.prototype.show = (id) =>
  apiFetch(`${BASE_URL}/todos/${id}`, {
    method: "GET",
  });

UsersService.prototype.create = (username, password, birthdate, gender) =>
  apiFetch(`${BASE_URL}/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, birthdate, gender }),
  });

UsersService.prototype.update = (id, done) =>
  apiFetch(`${BASE_URL}/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ done }),
  });

UsersService.prototype.delete = (id) =>
  apiFetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });

export default UsersService;
