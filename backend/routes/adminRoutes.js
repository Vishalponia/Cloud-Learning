const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.get(
  "/admin/contacts",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const contacts = await Contact.find();
      const users = await User.find().select("-password");

      res.json({
        contacts,
        users
      });

    } catch {
      res.status(500).json({ message: "Server Error" });
    }
  }
);

module.exports = router;
