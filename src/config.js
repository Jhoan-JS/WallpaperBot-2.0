require("dotenv").config({ paht: "../.env" });
const snoowrap = require("snoowrap");

const r = new snoowrap({
  userAgent: process.env.USER_AGENT,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
});

module.exports = r;
