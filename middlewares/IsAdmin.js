function isAdmin(req, res, next) {
  console.log("Se recibió un request :" + req.auth.role);
  if (req.auth.role === "Admin") {
    next(); // Para dar paso al siguiente middleware.
  } else {
    console.log("Credenciales invalidas  ");
  }
}

module.exports = isAdmin;
