import { clientApi } from "./clientApi";

export function postProducts(data) {
  return clientApi("/products", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function getProducts() {
  return clientApi("/products");
}
