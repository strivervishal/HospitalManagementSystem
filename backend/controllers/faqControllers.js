const FAQ = require("../models/FAQ");

// Get all FAQs
exports.getFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve FAQs" });
  }
};

// Add a new FAQ
exports.addFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newFAQ = new FAQ({ question, answer });
    await newFAQ.save();
    res.status(201).json(newFAQ);
  } catch (error) {
    res.status(500).json({ error: "Failed to add FAQ" });
  }
};

// Delete an FAQ
exports.deleteFAQ = async (req, res) => {
  try {
    await FAQ.findByIdAndDelete(req.params.id);
    res.json({ message: "FAQ deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete FAQ" });
  }
};