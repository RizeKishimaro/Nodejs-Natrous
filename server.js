const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './conifg.env' });
const app = require('./app');
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);
mongoose.connect(
  DB,
  { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false },
).then(result =>{
  console.log("connection is success!");
})


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
