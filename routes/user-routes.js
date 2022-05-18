const express=require("express")
const { addUser, getAllUser, getSingleUser, deleteSingleUser, updateUser } = require("../controller/user-controller")


const router=express.Router()

router.route("/").post(addUser).get(getAllUser)
router.route("/:id").get(getSingleUser).delete(deleteSingleUser).put(updateUser)

module.exports=router