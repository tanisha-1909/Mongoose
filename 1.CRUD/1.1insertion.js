const mongoose= require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

// protocol is mongodb
// localhost is replace by 127.0.0.1
// port 27017
// test- db name

main()
.then((res)=>{
    console.log("successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User= mongoose.model("User",userSchema);
const Employee= mongoose.model("Employee",userSchema);

// mydatabase> show collections
// employees
// users

// inserting data

const user1= new User({
    name:"Tanisha",
    email:"tanisha@yahoo.in",
    age:20
});

// to modify it in database
user1.save();

// another method- using promise
const user2= new User({
    name:"vishal",
    email:"vishal@google.com",
    age:23
});
user2
    .save()
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });

// --output
// successful
// {
//   name: 'vishal',
//   email: 'vishal@google.com',
//   age: 23,
//   _id: new ObjectId('67ea9fced965ebfbbc1a1e64'),
//   __v: 0
// }


// insertmany
User.insertMany([
    {name:"honey",email:"honey@gmail.com", age:25},
    {name:"money",email:"money@gmail.com", age:225},
]).then((data)=>{
    console.log(data);
});

