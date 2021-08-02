const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/',(req,res)=>{
    db.Lunch.findAll().then(lunches=>{
        const jsonLunches = lunches.map(lunch=>{
            return lunch.get({plain:true})
        })
        console.log(jsonLunches);
        res.render("index",{
            lunches:jsonLunches
        })
    })
})

router.get("/login",(req,res)=>{
    res.render("login");
})

router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/")
})

router.get("/profile",(req,res)=>{
    if(req.session.user){
        db.User.findByPk(req.session.user.id,{
            include:[db.Lunch]
        }).then(userData=>{
            const userJson = userData.get({plain:true})
            console.log(userJson)
            res.render("profile",userJson)
        })
    } else {
        res.redirect("/login")
    }
})

module.exports = router;