const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Admin, User } = require("../models");

const authController = {
  getToken: async (req, res) => {
    try {
      const { email, password } = req.body;

      const admin = await Admin.findOne({ where: { email } });
      const user = await User.findOne({ where: { email } });

      if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
          const token = jwt.sign(
            { sub: admin.id, role: "Admin" },
            process.env.DB_TOKEN_SECRET
          );
          return res.send("Token for Admin: " + token);
        }
      }

      if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          const token = jwt.sign(
            { sub: user.id, role: "User" },
            process.env.DB_TOKEN_SECRET
          );
          return res.send("Token for Use: " + token);
        }
      }

      return res.json({ message: "Invalid Credentials" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = authController;
