function isUser(req, res, next) {
  console.log("A request was received :" + req.auth.role);
  if (req.auth.role === "User" || req.auth.role === "Admin") {
    next(); // Para dar paso al siguiente middleware.
  } else {
    console.log("Invalid Credentials");
  }
}

module.exports = isUser;
