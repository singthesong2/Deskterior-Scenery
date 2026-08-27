const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function clientApi(endpoint, option = {}) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",

      ...(token && {
        Authorization: `Bearer ${token}`,
      }),

      ...option.headers,
    },
    ...option,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || `API Error : ${response.status}`);
  }
  return result;
}
