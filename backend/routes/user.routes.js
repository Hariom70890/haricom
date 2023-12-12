const express = require("express");
const { UserModel } = require("../model/users.model");

const userRouter = express.Router();

// registration
userRouter.post("/register", async (req, res) => {
   try {
      const { firstName, lastName, email, companySize } = req.body;
      const user = new UserModel({ firstName, lastName, email, companySize });
      
      // Save the user to the database
      await user.save();

      res.status(200).json({
         msg: "New user has been registered",
         updatedUser: req.body,
      });
   } catch (error) {
      console.error("Error during user registration:", error);
      res.status(500).json({
         error: "Internal Server Error",
      });
   }
});

module.exports = { userRouter };
