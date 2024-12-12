const numberInput = document.getElementById('numberInput');
const errorMessage = document.getElementById('errorMessage');

numberInput.addEventListener('input', () => {
  const value = Number(numberInput.value);
  if (value <= 10) {
    errorMessage.textContent = 'Please enter a number greater than 10.';
  } else {
    errorMessage.textContent = '';
  }
});
