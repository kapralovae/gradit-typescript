export const api = async () => {
  const data = await fetch('http://localhost:3001/quests/');
  const quests = await data.json();
  return quests;
};
