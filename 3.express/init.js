const mongoose=require('mongoose');

const Chat= require("./models/chat.js");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main()
.then((result)=>{
    console.log("successful connection");
})
.catch((err)=>{
    console.log(err);
});

Chat.insertMany([
    {
        from:"koeha",
        to:"priya",
        message:" sheets",
        created_at: new Date()
    },
    {
        from:"sumit",
        to:"ajay",
        message:"hello",
        created_at: new Date()
    },
    {
        from:"tuna",
        to:"sumit",
        message:"good",
        created_at: new Date()
    }

]);