const { Router } = require("express");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = Router();

 
auth.use((req,res,next)=>{
    users=req.app.get('users')
    next();
})


auth.post("/signup", async (req, res) => {
  const { user, password } = req.body;

  try {
      const existingUser = await users.findOne({ user });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const result = await users.insertOne({ user, password: hashedPassword });

      res
        .status(201)
        .json({
          message: "User created successfully",
          user: result.insertedId,
        });
  } catch (error) {
    console.error("Signup error", error);
    res.status(500).json({ message: "Failed to register user" });
  } 
});

auth.post("/login", async (req, res) => {
  const userCred = req.body;
  const dbuser = await users.findOne({
    user: userCred.user,
  });
  if (dbuser === null) {
    res.send({ message: "Invalid username" });
  } else {
    const status = await bcrypt.compare(userCred.password, dbuser.password);
    if (status === false) {
      res.send({ message: "Invalid password" });
    } else {
      const signedToken = jwt.sign({ username: dbuser.username }, "secretkey", {
        expiresIn: "1d",
      });
      res.send({
        message: "login success",
        token: signedToken,
        user: dbuser,
      });
    }
  }
});

module.exports = auth;
