import './style.css';

const names = [
  {
    name: 'Gilbert',
    score: 100,
  },
  {
    name: 'Faith',
    score: 90,
  },
  {
    name: 'Caren',
    score: 80,
  },
  {
    name: 'Juliet',
    score: 99,
  },
  {
    name: 'Brenda',
    score: 70,
  },
  {
    name: 'Gilbert',
    score: 100,
  },
  {
    name: 'Faith',
    score: 90,
  },
  {
    name: 'Caren',
    score: 80,
  },
  {
    name: 'Juliet',
    score: 99,
  },
  {
    name: 'Brenda',
    score: 70,
  },
];

const leaderBoard = document.querySelector('.score-board');

names.forEach((item) => {
  const scores = document.createElement('p');
  scores.innerHTML = `${item.name}: ${item.score}`;
  leaderBoard.appendChild(scores);
});
