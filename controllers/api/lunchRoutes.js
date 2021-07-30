const express = require('express');
const router = express.Router();
const db = require('../../models');

router.get("/",(req,res)=>{
    db.Lunch.findAll({
        include:[db.User]
    }).then( lunches=>{
        res.json(lunches);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})
router.post("/",(req,res)=>{
    db.Lunch.create(req.body).then(newLunch=>{
        res.json(newLunch);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})
router.get("/:id",(req,res)=>{
    db.Lunch.findByPk(req.params.id,{
        include:[{
            model:db.User, 
        }]
    }).then(lunches=>{
        res.json(lunches);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})
router.delete("/:id",(req,res)=>{
    db.Lunch.destroy({
        where:{
            id:req.params.id
        }
    }).then(lunch=>{
        res.json(lunch);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;