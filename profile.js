//IMPLEMENTING THE REQUIRED MODULES
const express = require('express');
const app = express();
const port = 8500;
const bodyParser = require('body-parser');
//const ejs= require('ejs');
//const morgan= require('morgan');   

//USING THE REQUIRED MODULES
app.use(bodyParser.json());
//app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

//Variable initialization
var profileData=[]
var jobdata=[]
var landingData=[] 

//Middleware CODE 
/*
function middle(req,res,next ){
    console.log('Print Aavu mama !!!');
    next();
}*/
//app.use(middle);
//GET THE VALUES
 /*
app.get('/about/seeker' ,(req,res)=>{
    res.sendFile(__dirname +'/about-seeker.html')
})*/


app.get('/login' ,(req,res)=>{
    res.sendFile(__dirname +'/login.html')
})
app.get('/blogs', (req,res)=>{
    res.sendFile(__dirname+ '/blogs.html')
})
app.get('/landing', (req,res)=>{
    res.sendFile(__dirname +'/landing.html')  
})
app.get('/booking/confirmation', (req,res)=>{
    res.sendFile(__dirname + '/booking-confirmation.html')
})
app.get('/category' , (req,res)=>{
    res.sendFile(__dirname +'/main.html')
})
app.get('/service-details',(req,res)=>{
    res.sendFile(__dirname +'/service-details.html')
})
app.get('/contact', (req, res) => {
    res.sendFile(__dirname +'/contact.html')
})
app.get('/main' ,(req,res)=>{
    res.sendFile(__dirname +'/main.html')
})
/*
app.get('/home',(req,res)=>{
    res.sendFile(__dirname +'/home.html')
})*/
app.get('/editprofile' ,(req,res)=>{
    console.log(req.body);
    if(req.body.Email === "jktmk16824@gmail.com" && req.body.Password != 'm16j28t34@#$'){
        res.redirect("/submit");
        profileData.push(req.body);
        console.log("Invalid !!!!" + profileData);
    }  
})
app.get('/profile/about',(req,res)=>{
    res.sendFile(__dirname +'/player.html')
})
app.get('/submit',(req,res)=>{
    res.sendFile(__dirname +'/submit.html')
})

app.get('/job/list',(req,res)=>{
    res.sendFile(__dirname +'/job-listing.html')
})
app.get('/job/desc',(req,res)=>{
    res.sendFile(__dirname +'/job-description.html')
})
/*
app.get('/saver' ,(req,res)=>{
    
    else if(req.body.Email === "jktmk16824@gmail.com")
    {
         if(req.body.Password != 'm16j28t34@#$'){
            res.redirect("/saver")
            profileData.push(req.body);
            console.log(profileData);
         }
         else{
            console.log("Error");
            res.send("invalid data");
         }
    }
   // res.sendFile(__dirname +'/saver.html')
})
*/
/*
app.get('/sucess',(req,res)=>{

    res.send("working");
})
app.get('/submit',(req,res)=>{
    res.sendFile(__dirname + '/submit.html');
})
    */
//POST THE VALUES
app.post('/contact',(req,res)=>{
    profileData.push(req.body);
    console.log(req.body)
})
app.post('/landing', (req,res)=>{
    landingData.push(req.body);
    console.log(req.body)
})
app.post('/job/listing',(req,res)=>{
    jobdata.push(req.body);
    console.log(req.body);
})
app.post('/submit',(req,res)=>{
    console.log(req.body.Email)
    if(req.body.Email === "jktmk16824@gmail.com" && req.body.Password === 'm16j28t34@#$'){
            res.redirect("/home")
            profileData.push(req.body);
            console.log(profileData);
    }
    else if(req.body.mail === 'maggie16824@gmail.com' && req.body.password === '12345678'){
        res.redirect("/home")
        landingData.push(req.body);
        console.log(landingData);
    }
    else{
        res.redirect("/submit");
        console.log('Check Your Password')
    }
    //sconsole.log(req.body);
    // res.send(profileData);
   // console.log(profileData);
})

//LISTENING THE PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})