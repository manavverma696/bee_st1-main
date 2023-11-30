const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://manav0845:verma.193@cluster1.fqbxuf9.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Database Connected Successfully"))
.catch((err)=>console.log(err));