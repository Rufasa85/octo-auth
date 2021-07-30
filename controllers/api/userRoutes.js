const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require('../../models');

router.get("/",(req,res)=>{
    db.User.findAll({
        include:[db.Lunch]
    }).then( users=>{
        res.json(users);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})
router.post("/",(req,res)=>{
    db.User.create(req.body).then(newUser=>{
        req.session.user = {
            id:newUser.id,
            username:newUser.username,
            email:newUser.email
        }
        res.json(newUser);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})
router.post("/login",(req,res)=>{
    db.User.findOne({
        where:{
            email:req.body.email
        }
    }).then(user=>{
        if(!user){
            res.status(403).json({
                message:"incorrect username or password"
            })
        }else {
            const isPasswordCorrect = bcrypt.compareSync(req.body.password,user.password);
            if(isPasswordCorrect){
                req.session.user = {
                    id:user.id,
                    username:user.username,
                    email:user.email
                }
                res.json(user);
            } else {
                res.status(403).json({
                    message:"incorrect username or password"
                })
            }
        }
    })
})
router.get("/:id",(req,res)=>{
    db.User.findByPk(req.params.id,{
        include:[{
            model:db.Lunch, 
        }]
    }).then(users=>{
        res.json(users);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})
router.delete("/:id",(req,res)=>{
    db.User.destroy({
        where:{
            id:req.params.id
        }
    }).then(user=>{
        res.json(user);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;