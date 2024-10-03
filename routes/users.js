var express = require("express");
var router = express.Router();

const contact = require("../models/Contact");
const user = require("../models/User");

const {
  hashing,
  hashCompare,
} = require("../library/auth"); 

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource testing");
});

router.post("/add-user", async(req,res) => {
  try {
      // password-encryption
      const hash = await hashing(req.body.password); // calling hashing fnc to encrypt the user password.
      req.body.password = hash; // assigning the encrypted password.

      // adding the user to the DB with hashed password
      const data = await user.create(req.body);
      console.log(req.body);
      res.send({
        message: "details added successfully!",
        status: true,
        data: data,
      });

  } catch (err) {
    console.log(err);
    res.send({ message: "Error in conenction", status: false, error: err });
  }
});

router.post ("/login", async(req, res) => {
  try{
    const userData = await
    user.findOne({ userName: req.body.username }); // to get the user details.
    if(userData){
      // comparing the POST method password and hashed one in DB
      const compare = await hashCompare(req.body.password, userData.password);

      if (compare) {
        res.send({ message: "Login successfull!", status: true });
      } else {
        res.send({ message: "Invalid username or password", status: false });
      }
    } else  {
      res.send({ message: "No user available" });
    }
  } catch (err) {
    console.log(err);
    res.send({ message: "Error in conenction", status: false, error: err });
  }
})

router.post ("/reset-password", async (req,res) => {
  try {
    // getting the user old password

    const userOldPassword = req.body.oldPassword;
    // finding the user data with userName
    const userData = await
    user.findOne({ userName: req.body.userName });
  
    // verifying the user is available
    if(userData) {  
      const userName = userData.userName;
        // comparing the POST method password and hashed one in DB
        const compare = await hashCompare(userOldPassword, userData.password);

        if(compare) {
          // hashing the newPassword
          const hashedPassword = await hashing(req.body.newPassword);
          const data = await user.updateOne({ userName }, { $set: { password: hashedPassword } });

          res.send({
            message: "Password Updated!", status: true
          })
        } else {
          res.send ({message: "Invalid Existing Password!", 
            status:false})
        }
    } else {
      res.send({ message: "Enter the Valid userName!", status:false});
    }
  } catch (err) {
    console.log(err);
    res.send({
        message: "error in connection",
        status: false,
        error : err
      })  
    }
})

router.post("/add-message", async (req, res) => {
  try {
    const data = await contact.create(req.body);

    res.send({
      message: "details added successfully!",
      status: true,
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.send({ message: "Error in conenction", status: false, error: err });
  }
});

module.exports = router;
