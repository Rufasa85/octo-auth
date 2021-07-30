const express = require('express');
const router = express.Router();
const lunchRoutes = require("./lunchRoutes");
const userRoutes = require("./userRoutes");

router.use("/users",userRoutes);
router.use("/lunches",lunchRoutes);

module.exports = router;