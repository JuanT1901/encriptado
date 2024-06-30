const express = require('express');
const routerUser = require('./user.router');
const routerToDo = require('./toDo.router');
const { verifyJwt } = require('../utils/verifyJWT');
const router = express.Router();

// colocar las rutas aquí
router.use("/users", routerUser);
router.use("/todos", verifyJwt, routerToDo);
module.exports = router;