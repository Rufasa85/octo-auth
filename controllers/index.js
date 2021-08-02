const express = require('express');
const router = express.Router();
const apiRoutes = require("./api")
const frontEndRoutes = require("./frontEndRoutes")

router.use("/api",apiRoutes)
router.use(frontEndRoutes);


router.get("/readsessions",(req,res)=>{
    res.json({
        sessions:req.session
    })
})


module.exports = router;