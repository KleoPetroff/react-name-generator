function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomName(gradients) {
  return gradients[generateRandom(1, gradients.length)];
}

export default getRandomName;
