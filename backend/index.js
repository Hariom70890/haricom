//authentication :- Identifying the user
// authorization :- What permission do you have , what things you can access.

const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.listen(process.env.port, async () => {
   try {
      await connection;
      console.log(`Server is running at port ${process.env.port}`);
      console.log("Connected to db");
   } catch (error) {
      console.log(error.message);
      console.log("something went wrong!!");
   }
});
