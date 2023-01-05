export default (arr) => {
  const scoreListContainer = document.querySelector('.score-board');
  scoreListContainer.innerHTML = '';
  arr.result.forEach((item) => {
    const li = document.createElement('p');
    li.innerHTML = `${item.user}: ${item.score}`;
    scoreListContainer.appendChild(li);
  });
};