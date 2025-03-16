const mongoose = require("mongoose");

const DashboardCardSchema = new mongoose.Schema({
  title: String,
  value: mongoose.Schema.Types.Mixed, 
  percentage: Number,
  color: String,
  icon: String, 
});

const DashboardCard = mongoose.model("DashboardCard", DashboardCardSchema);

module.exports = DashboardCard;
