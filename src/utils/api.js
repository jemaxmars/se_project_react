const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Error: ${res.status} - ${res.statusText}`));
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function addItem(data, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

function deleteItem(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function likeItem(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function dislikeItem(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export { checkResponse, getItems, addItem, deleteItem, likeItem, dislikeItem };

export function registerUser(data) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

export function loginUser(data) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

export function updateProfile({ name, avatar }, token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(checkResponse);
}

export function getUserProfile(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}
