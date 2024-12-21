const API_BASE_URL = "http://localhost:8081/api/users";

export const signupUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  return response.text();
};

export const signinUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  return response.text();
};
