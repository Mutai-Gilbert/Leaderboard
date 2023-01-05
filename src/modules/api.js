// Add score

const getAPI = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Rz215bgYBb0lSnJ7gUWT/scores/');
  const result = await response.json();
  return result;
};

const setAPI = async (scores) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Rz215bgYBb0lSnJ7gUWT/scores/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(scores),
  });
  const result = await response.json();
  return result;
};
export { getAPI, setAPI };