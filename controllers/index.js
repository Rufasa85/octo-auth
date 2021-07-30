const express = require('express');
const router = express.Router();
const apiRoutes = require("./api")

router.use("/api",apiRoutes)

router.get("/sessiondata",(req,res)=>{
    res.json({session:req.session})
})

router.get("/addnametosession/:name",(req,res)=>{
    req.session.userDefinedName= req.params.name;
    res.send("session data updated!")
})
router.get("/secretclub",(req,res)=>{
    if(req.session.user){
        res.send("welocome to the secret club!")
    } else {
        res.status(403).send("not logged in")
    }
})

module.exports = router;