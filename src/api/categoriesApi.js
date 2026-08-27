import { clientApi } from "./clientApi";

export function postCategories(data) {
  return clientApi("/categories", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function getCategories() {
  return clientApi("/categories");
}
