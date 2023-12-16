const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
// const session = require("express-session");
const cookieParser = require("cookie-parser");
const unless = require("express-unless");
const bodyParser = require("body-parser");
const auth = require("./middlewares/auth");
// const path = require("path");
// const config = require("./config/config");
// const cookieSession = require("cookie-session");
// const accessCors = require("./middlewares/constant");
// const swaggerUi = require('swagger-ui-express');
// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// const { Cors } = require('./middlewares/cors');
const corsOptions = {
  origin: "*",
  credentials: true,
};
// const swaggerDocument = require('./api/swagger.json')
// app.use("/test-api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
// AUTH VERIFICATION AND UNLESS
auth.verifyToken.unless = unless;

// app.use(
//   session({
//     secret: config.GOOGLE_CLIENT_SECRET,
//     resave: false,
//     saveUninitialized: true,
//   })
// );
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/user", require("./routes/user.routes"));
app.use("/api/comment", require("./routes/comment.routes"));
app.use("/api/contact", require("./routes/contact.routes"));
app.use("/api/message", require("./routes/message.routes"));
app.use("/api/product", require("./routes/product.routes"));
app.use("/api/category", require("./routes/category.routes"));
app.use("/api/order", require("./routes/order.routes"));
app.use("/api/payment", require("./routes/payment.routes"));
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to my API shopping" });
});

module.exports = app;
