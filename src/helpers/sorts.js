const snoowrap = require("../config");
const getNew = async (randomReddit, time) => {
  return await snoowrap
    .getSubreddit(randomReddit)
    .getNew({
      time: time,
      limit: 15,
      search: "pic",
    })
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return e;
    });
};
const getTop = async (randomReddit, time) => {
  return await snoowrap
    .getSubreddit(randomReddit)
    .getTop({
      time: time,
      limit: 15,
      search: "pic",
    })
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return e;
    });
};

const getHot = async (randomReddit, time) => {
  return await snoowrap
    .getSubreddit(randomReddit)
    .getHot({
      time: time,
      limit: 15,
      search: "pic",
    })
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return e;
    });
};

const getBest = async (randomReddit, time) => {
  return await snoowrap
    .getSubreddit(randomReddit)
    .getBest({
      time: time,
      limit: 15,
      search: "pic",
    })
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return e;
    });
};

module.exports = {
  getBest,
  getHot,
  getNew,
  getTop,
};
