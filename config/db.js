const mongoose=require("mongoose")

const db=()=>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log(`db connected`);
    } catch (error) {
        console.log(`something went wrong ${error}`);
        process.exit()
    }
}
module.exports=db