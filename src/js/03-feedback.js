import throttle from 'lodash.throttle';

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
};

const STORAGE_KEY = 'feedback-form-state';

populateForm();
refs.feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));
refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);

function onFeedbackFormSubmit(e) {
  e.preventDefault();
  const { email, message } = e.target.elements;
  console.log({ email: email.value, message: message.value });
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
  if (!email || !message) {
    alert('oh my God');
    return;
  }
}

function onFeedbackFormInput() {
  const dataForm = {
    email: refs.feedbackForm.email.value,
    message: refs.feedbackForm.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function populateForm() {
  const { email, message } = refs.feedbackForm.elements;
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!savedData) {
    return;
  }

  email.value = savedData.email ?? '';
  message.value = savedData.message ?? '';
}
