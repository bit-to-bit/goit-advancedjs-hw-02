const feedbackFormEl = document.querySelector('.feedback-form');
const formData = {};

const fillFormField = () => {
  try {
    const formDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    if (formDataFromLS === null) {
      return;
    }

    const formDataFromLSKeys = Object.keys(formDataFromLS);

    formDataFromLSKeys.forEach(key => {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
      formData[key] = formDataFromLS[key];
    });
  } catch (err) {
    console.log(err);
  }
};

fillFormField();

const onFormFieldChange = event => {
  const { target: formField } = event;

  const fieldName = formField.name;
  const fieldValue = formField.value.trim();

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  const email = event.currentTarget.email.value;
  const message = event.currentTarget.message.value;

  if (email.trim() === '' || message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.dir(formData);
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};

feedbackFormEl.addEventListener('input', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
