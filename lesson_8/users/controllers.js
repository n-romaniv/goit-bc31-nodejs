const User = require("./model");

const { hashPassword, comparePassword } = require("../password");
const { generateToken, verifyToken } = require("../token");

const signup = async (req, res) => {
  const user = new User(req.body);
  // user.password === "123456"
  user.password = await hashPassword(user.password);
  // user.password = "abcdefrgr2121312312313"

  await user.save();

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 120_000_000,
  });

  res.status(200).json({ id: user.id }).end();
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  const passwordMatches = await comparePassword(password, user.password);
  const token = await generateToken({ id: user.id });

  if (passwordMatches) {
    res.status(200).cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 120_000_000,
    });
  } else {
    res.status(401).end();
  }
};

const logout = (req, res) => {
  res.cookie("token", "", { maxAge: 0 }).status(200);
};

const getProfile = async (req, res) => {
  const { id } = req.user;
  let user;

  try {
    user = await User.findById(id);
  } catch (e) {
    if (e instanceof mongoose.Error.DocumentNotFoundError) {
      res.cookie("token", "", { maxAge: 0 }).status(401);
      return;
    }

    throw e;
  }

  res.json(user).status(200).end();
};

module.exports = {
  login,
  signup,
  logout,
  getProfile,
};
