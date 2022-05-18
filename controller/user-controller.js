const user=require("../model/user-model")

exports.addUser=async(req,res)=>{
    try {
        const result= await user.create(req.body)

        res.json({
            success:true,
            message:"user added",
            result

        })
    } catch (error) {
        res.json({
            success:false,
            message:"error"+error,
            result:null

        })
    }
}

exports.getAllUser=async(req,res)=>{
    try {
        const result=await user.find()

        res.json({
            success:true,
            message:"all users",
            result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"error"+error,
            result:null
        })
        
    }
}

exports.getSingleUser=async(req,res)=>{
    try {
        const result=await user.findById(req.params.id)
        res.json({
            success:true,
            message:"single user",
            result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"error"+error,
            result:null
        })
    }
}

exports.updateUser=async(req,res)=>{
    try {
        const result=await user.findByIdAndUpdate(req.params.id,(req.body))
        res.json({
            success:true,
            message:"user update",
            result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"error"+error,
            result:null
        })
    }
}

exports.deleteSingleUser=async(req,res)=>{
        try {
            const result=await user.findByIdAndDelete(req.params.id)
            res.json({
                success:true,
                message:"single user deleted",
                result
            })
        } catch (error) {
            res.json({
                success:false,
                message:"error"+error,
                result:null
            })
        }
}