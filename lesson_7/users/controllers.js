const User = require("./model");

export const signup = async (req, res) => {
  const user = new User(req.body);
  // user.password === "123456"
  user.password = await hashPassword(user.password);
  // user.password = "abcdefrgr2121312312313"

  await user.save();

  res.status(201).end();
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  const passwordMatches = await comparePassword(password, user.password);

  if (passwordMatches) {
    res.json(user).end();
  } else {
    res.status(401).end();
  }
};
