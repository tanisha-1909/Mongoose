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

// to list complete document

Employee.find({})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

// age>22
// using find 

Employee.find({age: {$gt: 22}})
.then((res)=>{
    console.log(res[0].username);
})
.catch((err)=>{
    console.log(err);
})


// using findOne to filter id

Employee.findOne({_id: "67eb783a789f4e2c97301259"})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

// ----find by id

Employee.findById("67eb783a789f4e2c9730125a")
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});


// const employee1= new Employee({
//     username:"tanisha",
//     age:20,
//     subject:"webd"
// });
// const employee2= new Employee({
//     username:"vishal",
//     age:23,
//     subject:"ai"
// });

// employee1.save();
// employee2
// .save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })