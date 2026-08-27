import { clientApi } from "./clientApi";

export async function signUp(id, password) {
  const result = await clientApi("/auth//signup", {
    method: "POST",
    body: JSON.stringify({
      id,
      password,
    }),
  });
}

export async function login(id, password) {
  const result = await clientApi("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      id,
      password,
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
