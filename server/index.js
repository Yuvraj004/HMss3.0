const express = require('express');
const mongoose = require("mongoose");
const docRouter = require("./routes/doctorRoutes");
const adminRouter = require("./routes/adminRoutes");
const deptRouter = require("./routes/deptRoutes");
const patientRouter = require("./routes/patientRoutes");
const feedbackRouter = require("./routes/feedbackRoutes");
const appointmentRouter = require("./routes/appointmentRoutes");
const refreshController = require("./controllers/refreshController");
const hospitalList = require("./routes/hospitalList");
const app = express();
const cors = require("cors");
const PORT = 4000;
app.use(cors());
app.use(express.json())
app.use("/doctor", docRouter);
app.use("/admin", adminRouter);
app.use("/dept", deptRouter);
app.use("/patient", patientRouter);
app.use("/feedback", feedbackRouter);
app.use("/appointment", appointmentRouter);
app.use("/hlist",hospitalList);
const mongoDB = "mongodb+srv://yuvraj:anh67jxmFw07A0a3@hms2.n8td5pv.mongodb.net/?retryWrites=true&w=majority"
// const mongoDB = "mongodb+srv://yuvraj:<password>@hms2.n8td5pv.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
app.post("/token", refreshController.refreshToken);
app.listen(PORT, () => { console.log(`Server running on ${PORT}`) });
