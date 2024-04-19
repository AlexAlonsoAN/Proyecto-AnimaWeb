function IsAdmin (req, res, next) {
    console.log("Se recibió un request :"+ req.auth.role);
    if(req.auth.role === "Admin"){
        next();
    }
    else{
        console.log("mal");
    }

   
    // Para dar paso al siguiente middleware.
    }

    module.exports = IsAdmin;