import { clientApi } from "./clientApi";

export async function signUp(data) {
  return clientApi("/auth/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function login(data) {
  return clientApi("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      id: data.id,
      password: data.password,
    }),
  });
}

export function getMe() {
  return clientApi("/auth/me");
}

export function checkId(id) {
  return clientApi("/auth/check-id", {
    method: "POST",
    body: JSON.stringify({
      id,
    }),
  });
}
