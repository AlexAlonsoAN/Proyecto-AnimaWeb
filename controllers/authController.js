const jwt = require("jsonwebtoken");
const { User } = require("../models");

const authController = {
  getToken: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email, //only email  === email : email
          password,
        },
      });
      if (!user) return res.json({ message: "Credenciales inválidas" });
      
      else {
        const token = jwt.sign(
          { sub: user.id, role: "Admin" },
          process.env.DB_TOKEN_SECRET
        );
        return res.send("Token: " + token);
      }
    } catch (err) {
      console.log("error ");
    }
  },
};

module.exports = authController;
