const form = document.getElementById('form');
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
});
