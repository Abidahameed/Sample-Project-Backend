const express = require("express");
const router = express.Router();
const {PostAllUser, GetAllUser, GetLogin} = require("../controllers/user");


router.route("/").post(PostAllUser);
router.route("/allusers").get(GetAllUser);
router.route("/userlogin").post(GetLogin);

 module.exports = router;
