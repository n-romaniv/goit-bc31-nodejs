const { verifyToken, generateToken } = require("../token");

const userMiddleware = async (req, res, next) => {
  if (!req.cookies.token) {
    res.status(401).end();
    return;
  }

  let userData;

  try {
    userData = await verifyToken(req.cookies.token);
  } catch {
    res.status(401).end();
    return;
  }

  if (Date.now() - userData.exp < 60_000) {
    const newToken = await generateToken(userData);
    res.cookie("token", newToken);
  }

  req.user = userData;

  next();
};

module.exports = userMiddleware;
