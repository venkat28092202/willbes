const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const responseMessage = document.getElementById('responseMessage');

yesButton.addEventListener('click', () => {
  responseMessage.textContent = "Yay! You've made me the happiest person alive! 💖";
  responseMessage.style.color = "#ff6f61";
});

noButton.addEventListener('click', () => {
  responseMessage.textContent = "Error 404: Heart not found. 😢 Please reconsider!";
  responseMessage.style.color = "#6b5b95";
  noButton.style.position = 'absolute';
  noButton.style.left = `${Math.random() * 80}%`;
  noButton.style.top = `${Math.random() * 80}%`;
});