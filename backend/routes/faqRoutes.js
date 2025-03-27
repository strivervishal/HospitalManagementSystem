const express = require("express");
const router = express.Router();

// Sample FAQs
const faqs = [
    { id: 1, question: "What are the hospital's visiting hours?", answer: "Visiting hours are from 9 AM to 9 PM." },
    { id: 2, question: "Do you accept insurance?", answer: "Yes, we accept major insurance providers." },
];

// Route to get all FAQs
router.get("/", (req, res) => {
    res.json(faqs);
});

module.exports = router;
