const express=require("express")
const app = express()


app.set('view engine','ejs')


app.get("/",(req,res)=>{
    console.log(req)
    res.send("haha, this is home page")
})
app.get("/about",(req,res)=>{
    const name="Nishan sunar" 
    res.render("about.ejs",{name})
  
})

app.get("/contact",(req,res)=>{
    const head ="this is ACES workshop"
    res.render("contact.ejs",{head})
  
})
app.listen(3000,()=>{
console.log("nodejs project has  started " + 3000)
})

