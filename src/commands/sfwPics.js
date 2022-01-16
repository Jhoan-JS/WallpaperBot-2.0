const snoowrap = require("../config");
const helper = require("../helpers/helper");
const sorts = require("../helpers/sorts");

const times = ["day", "week", "year", "month", "all"];

const generalWallpapers = async () => {
  const subreddits = [
    "wallpapers",
    "EarthPorn",
    "SkyPorn",
    "ExposurePorn",
    "ImaginaryLandscapes",
    "ImaginaryTechnology",
    "futureporn",
  ];

  const randomReddit =
    subreddits[helper.generateRandomNumber(subreddits.length - 1)];

  const getSort = [sorts.getNew, sorts.getTop, sorts.getHot];
  const sort = getSort[helper.generateRandomNumber(getSort.length - 1)];
  const time = times[helper.generateRandomNumber(times.length - 1)];
  try {
    const data = await sort(randomReddit, time);

    const pics = await helper.getPic(data);

    return pics[helper.generateRandomNumber(pics.length - 1)];
  } catch (error) {
    console.log(error);
  }
};

const animeWallpapers = async () => {
  const subreddits = ["Animewallpaper"];

  const randomReddit =
    subreddits[helper.generateRandomNumber(subreddits.length - 1)];

  const getSort = [sorts.getNew, sorts.getTop, sorts.getHot];
  const sort = getSort[helper.generateRandomNumber(getSort.length - 1)];
  const time = times[helper.generateRandomNumber(times.length - 1)];
  try {
    const data = await sort(randomReddit, time);

    const pics = await helper.getPic(data);

    return pics[helper.generateRandomNumber(pics.length - 1)];
  } catch (error) {
    console.log(error);
  }
};

const futureWallpapers = async () => {
  const subreddits = ["futureporn"];

  const randomReddit =
    subreddits[helper.generateRandomNumber(subreddits.length - 1)];

  const getSort = [sorts.getNew, sorts.getTop, sorts.getHot];
  const sort = getSort[helper.generateRandomNumber(getSort.length - 1)];
  const time = times[helper.generateRandomNumber(times.length - 1)];
  try {
    const data = await sort(randomReddit, time);

    const pics = await helper.getPic(data);

    return pics[helper.generateRandomNumber(pics.length - 1)];
  } catch (error) {
    console.log(error);
  }
};

const fantasyWallpaper = async () => {
  subreddits = ["ImaginaryLandscapes", "ImaginaryTechnology"];
  const randomReddit =
    subreddits[helper.generateRandomNumber(subreddits.length - 1)];

  const getSort = [sorts.getNew, sorts.getTop, sorts.getHot];
  const sort = getSort[helper.generateRandomNumber(getSort.length - 1)];
  const time = times[helper.generateRandomNumber(times.length - 1)];
  try {
    const data = await sort(randomReddit, time);

    const pics = await helper.getPic(data);

    return pics[helper.generateRandomNumber(pics.length - 1)];
  } catch (error) {
    console.log(error);
  }
};

const mobileWallpaper = async () => {
  subreddits = ["Verticalwallpapers", "phonewallpapers", "MobileWallpaper"];
  const randomReddit =
    subreddits[helper.generateRandomNumber(subreddits.length - 1)];

  const getSort = [sorts.getNew, sorts.getTop, sorts.getHot];
  const sort = getSort[helper.generateRandomNumber(getSort.length - 1)];
  const time = times[helper.generateRandomNumber(times.length - 1)];
  try {
    const data = await sort(randomReddit, time);

    const pics = await helper.getPic(data);

    return pics[helper.generateRandomNumber(pics.length - 1)];
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  wallpaper: generalWallpapers,
  anime: animeWallpapers,
  future: futureWallpapers,
  fantasy: fantasyWallpaper,
  mobile: mobileWallpaper,
};
