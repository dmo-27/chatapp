const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id },"dhanashree", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;