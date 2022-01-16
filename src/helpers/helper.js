const generateRandomNumber = (number) => {
  return Math.ceil(Math.random() * number);
};

const getPic = (data) => {
  const images = [];

  data.forEach((img) => {
    if (img.url.includes("jpeg") || img.url.includes("jpg")) {
      console.log(img.url);
      images.push(img.url);
    }
  });

  return images;
};

module.exports = {
  generateRandomNumber,
  getPic,
};
