const { User } = require('../../db/models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  signin: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const checkUser = await User.findOne({ where: { username } });

      if (checkUser) {
        const checkPassword = bcrypt.compareSync(password, checkUser.password);

        if (checkPassword) {
          const token = jwt.sign(
            {
              user: {
                id: checkUser.id,
                name: checkUser.name,
                username: checkUser.username,
              },
            },
            'secret'
          );
          res.status(200).json({ message: 'Success Signin', data: token });
        } else {
          res.status(403).json({ message: 'Invalid password' });
        }
      } else {
        res.status(403).json({ message: 'Invalid username' });
      }
    } catch (error) {
      next(error);
    }
  },

  signup: async (req, res, next) => {
    try {
      const { username, name, password, confirmPassword } = req.body;

      if (password !== confirmPassword) {
        res
          .status(403)
          .json({ message: "Password and confirm password don't match" });
      }

      const checkUser = await User.findOne({ where: { username: username } });
      if (checkUser) {
        return res.status(403).json({ message: 'Username registered' });
      }

      const user = await User.create({
        name,
        username,
        password: bcrypt.hashSync(password, 10),
        level: 'admin',
      });

      console.log(user);

      delete user.dataValues.password;

      res.status(201).json({
        message: 'Success Signup',
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },
};
