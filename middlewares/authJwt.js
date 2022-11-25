const jwt = require("jsonwebtoken");
const config = require("./../config/auth.config");

const VerifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    res.status(401).json({
      message: "Invalid token",
    });
    return;
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      res.status(401).json({
        message: "Unauthorized",
      });

      return;
    }

    req.userId = decoded.id;
    next();
  });
};

module.exports = {
  VerifyToken,
};
