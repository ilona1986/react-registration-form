const bcrypt = require('bcryptjs');
const User = require('../model/user');

class authController {
  async registration(req, res) {
    try {
      const {username, email, password} = req.body;
      const candidate = await Users.findOne({email})
      if (candidate) {
        return res.json({massage: 'User is email', code: 1})
      }

      const hashPassword = bcrypt.hashSync(password, 10);
      const User = new Users({username, email, password: hashPassword})
      await User.save();
      return res.json(true)
    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Registration error'})
    }
  }

}

