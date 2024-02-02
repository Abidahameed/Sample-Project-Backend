const express = require("express");
const router = express.Router();
const {PostCartProducts, GetCart , removecartitem, IncrmntCartQuantity, DcrmntCartQuantity} = require("../controllers/cart");



router.route("/").post(PostCartProducts);
router.route("/viewcart").get(GetCart);
router.route("/deletecartitem").delete(removecartitem);
// router.route("/incrmnt").put(IncrmntCartQuantity);
// router.route("/dcrmnt").put(DcrmntCartQuantity);
module.exports = router;
