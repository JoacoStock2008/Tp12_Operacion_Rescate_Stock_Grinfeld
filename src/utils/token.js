const jwt = require("jsonwebtoken");

function signToken(user) {
  return jwt.sign(
    { role: user.role },
    process.env.JWT_SECRETT || "super-secret", //2ndo error, debería ser process.env.JWT_SECRET en vez de process.env.JWT_SECRETT
    { expiresIn: "2s" }
  );
}

module.export = { // es module.exports, no module.export
  signToken
};
