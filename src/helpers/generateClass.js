function generateRandom(max) {
  return Math.floor(Math.random() * max - 1);
}

function getRandomName(gradients) {
  return gradients[generateRandom(gradients.length)];
}

export default getRandomName;
