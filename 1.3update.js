const mongoose= require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');
}
main()
.then((result)=>{
    console.log("successful connection");
})
.catch((err)=>{
    console.log(err);
})

const employeeSchema= new mongoose.Schema({
    username:String,
    age:Number,
    subject:String
});

const Employee= mongoose.model("Employee",employeeSchema);


// update one
Employee.updateOne({username:"tanisha"},{username:"tannu"})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})


// updatemany

Employee.updateMany({$or:[{subject:"ai"},{subject:"webd"}]},{subject:"mern"})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})


// findoneandupdate
// find whose name istanisha and update age to 21
// find ko print krta h(before  updation)
Employee.findOneAndUpdate({username:"tannu"}, {age:21})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

// if we want it to print new update value rather than old
Employee.findOneAndUpdate({username:"tannu"}, {age:22},{new:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

// findById and update

Employee.findByIdAndUpdate("67eb783a789f4e2c97301259", {age:24},{new:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})