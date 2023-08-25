const express =require("express");
const UserSchema= require("../models/user");
const { allusers, register, finduser } = require("../controllers/user");
const router = express.Router();



router.get("/",allusers);

router.post("/",register);


router.put('/:id',finduser)

module.exports= router;