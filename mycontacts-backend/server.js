const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const validateToken = require("./middleware/validateTokenHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

//app.get('/api/contacts', (req, res) => {
//    res.status(200).json({ message: 'Get all contacts'});
//});

app.use(express.json());  // body parser
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);
app.use(validateToken);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
