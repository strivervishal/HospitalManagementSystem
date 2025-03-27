const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const hospitalSchema = new mongoose.Schema({
  month: String,
  appointments: Number,
  patients: Number,
});

const HospitalData = mongoose.model("HospitalData", hospitalSchema);

const sampleData = [
  { month: "Jan", appointments: 400, patients: 240 },
  { month: "Feb", appointments: 500, patients: 350 },
  { month: "Mar", appointments: 700, patients: 450 },
  { month: "Apr", appointments: 600, patients: 400 },
];

const insertData = async () => {
  await HospitalData.deleteMany({});
  await HospitalData.insertMany(sampleData);
  console.log("Data Inserted!");
  mongoose.connection.close();
};

insertData();
