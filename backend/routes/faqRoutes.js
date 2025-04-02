const express = require("express");
const router = express.Router();
const faqController = require("../controllers/faqControllers");

// Routes
router.get("/", faqController.getFAQs);
router.post("/", faqController.addFAQ);
router.delete("/:id", faqController.deleteFAQ);

module.exports = router;
