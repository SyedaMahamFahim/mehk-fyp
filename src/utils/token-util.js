
// Function to set the token in local storage
export function setToken(token) {
    window.localStorage.setItem("token", `Bearer ${token}`);
  }

// Function to get the token from local storage
export function getToken() {
    return window.localStorage.getItem("token");
}
  