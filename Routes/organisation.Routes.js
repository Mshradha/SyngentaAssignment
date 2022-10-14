const express = require("express");

const organisationController = express.Router();

const DataModal = require("../Modal/User.Modal.js");

organisationController.get("/", async(req,res)=>{
    const result = await DataModal.find();
    res.status(200).send(result)
})

organisationController.post("/post",async(req,res)=>{
    const {property,region,field,crop_cycle } = req.body;
    const result = new DataModal({
        property,region,field,crop_cycle
    })
    result.save();
    return res.status(200).send(result)
})

organisationController.get("/:getData", async(req,res)=>{
    const {getData} = req.params;
    const result = await DataModal.find({
        $or :[
            {region: {$regex:getData}},
            {field: {$regex:getData}},
            {crop_cycle: {$regex:getData}}
            
        ]
    })
   return res.send(result)
})

organisationController.patch("/update/:id", async(req,res) => {
    const {id} = req.params;
    const updated = await DataModal.findOneAndUpdate({_id:id},req.body,{new:true})
    return res
        .status(200)
        .send({ message: " updated successfully", updated: updated });
})

organisationController.delete("/del/:id", async(req,res) => {
    const {id} = req.params;
    await DataModal.findOneAndDelete({_id:id});
    return res.status(200).send("DELETED SUCCESSFULLY")
})


module.exports = organisationController