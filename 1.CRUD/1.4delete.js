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

Employee.deleteOne({username:"tannu"})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

Employee.deleteMany({age:{$gte:18}})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})


// to ensure and output the data we are deleting
Employee.findByIdAndDelete({username:"tannu"})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
