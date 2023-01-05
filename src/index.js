import './style.css';
import { getAPI, setAPI } from './modules/api.js';
import display from './modules/display.js';

const refresh = document.querySelector('.refresh-button');
const form = document.querySelector('form');

const getScore = async () => {
  const scores = await getAPI();
  display(scores);
};
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const userName = document.querySelector('#name');
  const userScore = document.querySelector('#score');
  const score = {
    user: userName.value,
    score: userScore.value,
  };
  userName.value = '';
  userScore.value = '';
  await setAPI(score);
});
refresh.addEventListener('click', async () => {
  getScore();
});
getScore();