/* Objects and Date in Javascript */
// defining objects in js
const item ={
    "item_code": "002",
    "item_title": "Wireless Mouse",
    "item_price":1200,
    "item_quantity": 5,
    "item_category":"Computer Accessories"
}
const bike={
    model: "Yamaha R7",
    category: "Sports",
    brand: "Yamaha",
    price: 40000.00,
    year: 2023,
    color:"Blue"
}
console.log(item)
console.log(bike)
//accessing properties of object
//method one
console.log("Bike Model: " + bike.model)
console.log("Brand: " + bike.brand)
console.log(bike.price)
console.log("Item title: " + item.item_title)
//method two 
console.log("Item category: " + item["item_category"])
console.log("Item Price: " + item["item_price"])
console.log(item["item_quantity"])
console.log("Bike brand: " + bike["brand"])
//defining function inside object
//using this keyword - indicates the properties belong to that particular object
const movie = {
    movieName:"12th Fail",
    movieGenre: "Drama",
    productionHouse: "H2 Production",
    origin: "India",
    budget: "20 Cr",
    releasedYear: 2023,
    platform: "OTT",
    movieDetails: function(){
        return "Name: "+ this.movieName + " Genre: "+this.movieGenre
    }
}
console.log("movie origin: "+movie.origin)
//accessing function inside object
console.log(movie.movieDetails())

//exercise
//lets assume a system: Social Post 
//define possible objects with their properties of the system

// const social={
//     userName: "jyoti",
//     password: "123",
//     bio: "Hello world",
//     dob: "16-08-2000",
//     friends: function(){
//         var friends=[
//             "jyoti","suzina","md"
//         ]
//         return "Your friends: "+ friends
//     }
// }

// console.log(social.friends())
// //

const author={
    authorName:"Meow Meow",
    authorRegNo: "AUTH-002",
    authorEmail: "meowmeow@gmail.com",
    authorPassKey: "meow"
}
const category={
    catId: 1,
    catName: "General Post"
}
const post={
    postId:12,
    postCategory: "General Post",
    postDesc:"this is my general post",
    postDate: "2024-01-02",
    postStatus:true
}
const postFile={
    postFile:1,
    postFileName: "img123.jpg",
    postFileConfig:"JPEG",
    postFileStatus:true
}