const gameId = 'Zl4d7IVkemOTTVg2fUdz';

// Add score

const getAPI = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
  const result = await response.json();
  return result;
};

const setAPI = async (score) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
    method: 'POST',
    body: JSON.stringify({ score }),
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await response.json();
  return result;
};
export { getAPI, setAPI };