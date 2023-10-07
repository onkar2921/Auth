require("dotenv").config();
const jwt = require("jsonwebtoken");

const AuthMiddleware = async (req, res, next) => {
  try {
    let Bearertoken = req.headers.authorization;
    let token;

    if (Bearertoken && Bearertoken.startsWith("Bearer ")) {
      token = Bearertoken.split(" ")[1];

      const validUser = jwt.verify(token, process.env.SECREATE);

      if (validUser) {
        next();
      } else {
        return res.status(401).json({ message: "Unauth user" });
      }
    } else {
      return res.status(400).json({ message: "bad request" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { AuthMiddleware };
