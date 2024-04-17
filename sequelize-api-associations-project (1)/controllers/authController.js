const jwt = require("jsonwebtoken");
const {User} = require("../models")

const authController = {

getToken: async (req,res)=>{
const {email,password} = req.body;

const user = await User.findOne({
    where:{
         email, //only email  === email : email
        password
    }
})

if(user=== null) return res.json({message:"Credenciales inválidas"})
else return res.json(user)
/*     const token = jwt.sign({ sub: "user123" }, "UnStringMuySecreto");
 */


}

}

module.exports = authController