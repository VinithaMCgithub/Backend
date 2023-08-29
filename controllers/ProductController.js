const ProductModels = require('../models/Product')

const getAllData = (req,res,next) =>{
    ProductModels.find().then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        console.log(err);
        res.json({
            message:"ERROR"
        })
    })
}

const store=(req,res,next)=>{
    let data
    if(req.file){
        data = new ProductModel({
            name : req.body.name,
         image : req.body.string,
		 price : req.body.price,
		 qty : req.body.qty,
		 info : req.body.info,
		 created : req.body.date (auto)
        })
    }else{
        data = new ProductModel(req.body)
    }
    data.save().then((response)=>{
        res.json({
            message:"data saved",
            data:response.data
        })
    }).catch((err)=>{
        console.log(err);
        res.json({
            message:"data not saved"
        })
    })
}

const getById=(req,res,next)=>{
    let id = req.body.dataId
    ProductModel.findById(id).then((response)=>{
        res.json(response)
    }).catch((err)=>{
        res.json({
            message:`data is not found for id:${id}`
        })
    })
}

const update = (req,res,next)=>{
    let id = req.body.id
    let data = new ProductModel({
        name : req.body.name,
        image : req.body.string,
        price : req.body.price,
        qty : req.body.qty,
        info : req.body.info,
        created : req.body.date (auto)
    })
    data.findByIdAndUpdate(id).then((response)=>{
        res.json({
            message:"data updated"
        })
    }).catch((err)=>{
        res.json({
            message:`data not updated`
        })
    })
}

const deleteData = (req,res,next)=>{
    let id = req.body.id
    ProductModel.findByIdAndRemove(id).then(()=>{
        res.json({
            message:"deleted"
        })
    }).catch((err)=>{
        console.log(err);
        res.json({
            message:"error"
        })
    })
}
var ProductController = {getAllData,store,getById,update,deleteData}
module.exports = ProductController