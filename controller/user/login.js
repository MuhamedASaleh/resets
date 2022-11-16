const userModel = require(`../../model/user`);
const { validationResult } = require(`express-validator`);
const jwt = require(`jsonwebtoken`);
const bcrypt = require(`bcryptjs`);
module.exports = async (req, res) => {
  try {
    const { userName, Gender, dateOfBirth, Email, status, password } = req.body;

    const loginError = validationResult(req);
    if (!loginError.isEmpty()) {
      res.status(500).json({ messageError: loginError.array() });
    }
    const user = await userModel.findOne({ Email });
    if (user) {
      res.status(500).json({ message: "email already exist try another one" });
    } else {
      bcrypt.hash(password, 12, async (err, hash) => {
        if (err) {
          res.status(500).json({ messageError: `error in hashing password` });
        }
        await userModel.insertMany({
          userName,
          Gender,
          dateOfBirth,
          Email,
          status,
          password: hash,
        });
        const newUser = await userModel.findOne({ Email });
        if (newUser) {
          const token = jwt.sign(
            {
              userId: newUser._id,
              userStatus: true,
            },
            "shhhh"
          );
          res.status(201).header({ token }).json({ message: "user added" });
        } else {
          res.status(500).json({ message: "error after adding a user" });
        }
      });
    }
  } catch (error) {
    res.status(500).json({ message: "catch error in login" });
  }
};
