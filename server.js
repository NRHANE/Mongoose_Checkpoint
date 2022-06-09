const express = require("express");
const app =express();
const person = require("./models/person");

const dbConnect= require("./dbConnect");
dbConnect();
app.use(express.json())



app.post('/add',async(req,res)=>{
    try{
        const newPerson =new person({
            name: "nour",
            age: 28,
            favoriteFoods: ["salade","mloukhiya","couscous"]
        });
        let result = await newPerson.save()
        res.send({person: result, msg: 'person created and saved successfully'})  
    } catch (error) {
        
    }
})



arrayOfPeople =[{
    name: "dallel",
    age: 25,
    favoriteFoods: ["barkoukch", "makloub", "escalope"],
  },
  {
    name: "jihen",
    age: 20,
    favoriteFoods: ["kabab", "riz", "spaghetti"],
  },
  {
    name: "joud",
    age: 23,
    favoriteFoods: ["couscous", "poisson", "mloukhiya"],
  },
  {
    name: "areslan",
    age: 44,
    favoriteFoods: ["salade", "spaghetti", "mergaz"],
  },
  {
    name: "aysem",
    age: 35,
    favoriteFoods: ["wrata", "salade", "fritte"],
}]

person.create(arrayOfPeople, (err, data) => {
    err ? console.log(err) : console.log("peoples added");
  });



app.listen(5000,(err)=>err?console.log(err):console.log('server is running'))
        
