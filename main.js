import "./style.css";
import products from "./api/products.json"
import { showProductContainer } from "./homeProductCards";

// de


showProductContainer(products)

document.addEventListener("DOMContentLoaded", () => {
  const signInLink = document.getElementById('signInLink');
  const signUpLink = document.getElementById('signUpLink');
  const logoutLink = document.getElementById('logoutLink');

  // Check if user is logged in
  if (localStorage.getItem('isLoggedIn') === 'true') {
    signInLink.style.display = 'none';
    signUpLink.style.display = 'none';
    logoutLink.style.display = 'inline';
  } else {
    signInLink.style.display = 'inline';
    signUpLink.style.display = 'inline';
    logoutLink.style.display = 'none';
  }

  logoutLink.addEventListener('click', () => {
    localStorage.setItem('isLoggedIn', 'false');
    location.reload();
  });
});


