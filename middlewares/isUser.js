function isUser(req, res, next) {
  console.log("Se recibió un request :" + req.auth.role);
  if (req.auth.role === "User") {
    next(); // Para dar paso al siguiente middleware.
  } else {
    console.log("Credenciales Inváidas");
  }
}

module.exports = isUser;
