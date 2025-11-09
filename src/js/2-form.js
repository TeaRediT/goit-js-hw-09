//form
const formEl = document.querySelector('.feedback-form');
const email = formEl.elements.email;
const message = formEl.elements.message;

const formData = {
  email: '',
  message: '',
};

//form values load from local storage
const formDataLocal = JSON.parse(localStorage.getItem('feedback-form-state'));

if (formDataLocal) {
  email.value = formDataLocal.email;
  formData.email = formDataLocal.email;

  message.value = formDataLocal.message;
  formData.message = formDataLocal.message;
}

//input event
formEl.addEventListener('input', () => {
  formData.email = email.value.trim();
  formData.message = message.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

//submit event
formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (email.value.length < 1 || message.value.length < 1) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  formEl.reset();
});
