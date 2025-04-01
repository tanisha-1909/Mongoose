const express= require('express');
const app=express();
const mongoose=require('mongoose');
const path= require('path');
const methodOverride= require('method-override');
const Chat= require("./models/chat.js")

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
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

app.listen(8080,()=>{
    console.log("serving is listening at port")
});

// let chat1= new Chat({
//     from:"neha",
//     to:"priya",
//     message:"send me exm sheets",
//     created_at: new Date()
// })

// chat1
// .save()
// .then((res)=>{
//     console.log(res);
// })

app.get("/",(req,res)=>{
    res.send("root is working");
});

app.get("/chats", async(req,res)=>{
    let chats= await Chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats});
});

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/chats" , (req,res)=>{
    let {from,msg,to}= req.body;
    let newChat= new Chat({
        from:from,
        to:to,
        message:msg,
        created_at:new Date()
    });
    newChat
    .save()
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)});

    res.redirect("/chats");
});

app.get("/chats/:id/edit", async(req,res)=>{
    let {id}=  req.params;
    let chat= await Chat.findById(id);

    res.render("edit.ejs",{chat});
});

app.put("/chats/:id/",async (req,res)=>{
    let {id}= req.params;
    let {msg}= req.body;
    console.log(msg);
    let updatedChat= await Chat.findByIdAndUpdate(id,{message:msg},{runValidators:true,new:true});
    // console.log(updatedChat);
    res.redirect("/chats")
});

app.delete("/chats/:id", async (req,res)=>{
    let {id}= req.params;
    console.log(id);
    await Chat.findByIdAndDelete(id)
    .then((res)=>{
        console.log(res);
    })
    res.redirect("/chats");
})