const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, function (event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const pasword = form.elements.password.value.trim();

  if (mail === `` || password === ``) {
    alert(`All form fields must be filled in`);
    return;
  }

  const formData = {
    email: email,
    password: pasword,
  };

  console.log(formData);

  form.reset();
});
