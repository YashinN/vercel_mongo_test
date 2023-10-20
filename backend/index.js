// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const app = express();

// app.use(cors());

// const PORT = process.env.PORT || 6000;

// app.listen(PORT, () => {
//   console.log("listening");
// });

// // mongoose
// //   .connect(process.env.MONGO_URI)
// //   .then(() => {
// //     console.log("mongoDB connected");
// //     app.listen(PORT, () => {
// //       console.log(`server running on ${PORT}`);
// //     });
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //     process.exit(1);
// //   });

// module.exports = app;

// index.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

// Export the Express API
module.exports = app;

// .......test......
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const app = express();

// const port = 4000;

// app.use(cors());

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("mongoDB connected");
//     app.listen(port, () => {
//       console.log(`server running on ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//     process.exit(1);
//   });

// app.listen(port, () => {
//   console.log(`API listening on PORT ${port} `);
// });

// app.get("/", (req, res) => {
//   res.send("Hey this is my API running 🥳");
// });

// app.get("/about", (req, res) => {
//   res.send("This is my about route..... ");
// });

// // Export the Express API
// module.exports = app;
