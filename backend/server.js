const mongoose = require('mongoose');
const app = require('./app');

const { DB_HOST, PORT } = process.env;
console.log(DB_HOST);
console.log(PORT);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server running. Use our API on port: 4000');
      console.log('Database connection successful');
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
