const mongoose= require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
main()
.then((result)=>{
    console.log("successful connection");
})
.catch((err)=>{
    console.log(err);
})

// in case of many constraint
const bookSchema= new mongoose.Schema({
    title:{
        type:String,
        required: true, //similar to not null in sql 
        lowercase:true
    },
    author:{
        type:String,
        maxlength:20
    },
    price:{
        type:Number,
        min:[10,"price is too low"] 
        // it will give error "price is too low"
        // errors: {
        // price: ValidatorError: price is too low
    },
    discount:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        enum: ["fiction","horrror"],
    }
});

const Book= mongoose.model("Book",bookSchema);


let book1= new Book({
    title:"Maths",
    author:"rd sharma",
    price:200,
    category:"horrror"
});

book1
.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

Book.findByIdAndUpdate("67eba9b86ce2e20f90e0ee69",{price:0},{new:true, runValidators:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties);
})


// validator: [Function (anonymous)],
// message: 'price is too low',
// type: 'min',
// min: 10,
// path: 'price',
// fullPath: 'price',
// value: 0
// }

//   _message: 'Validation failed'