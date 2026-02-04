const express = require("express");
const cors = require("cors");
const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const FILE_PATH = path.join(__dirname, "contact-data.xlsx");
const SHEET_NAME = "Contacts";

// ✅ Ensure workbook & sheet always exist
async function getWorkbookAndSheet() {
  const workbook = new ExcelJS.Workbook();

  if (fs.existsSync(FILE_PATH)) {
    await workbook.xlsx.readFile(FILE_PATH);
  }

  let sheet = workbook.getWorksheet(SHEET_NAME);

  if (!sheet) {
    sheet = workbook.addWorksheet(SHEET_NAME);
    sheet.columns = [
      { header: "Name", key: "name", width: 25 },
      { header: "Email", key: "email", width: 30 },
      { header: "Message", key: "message", width: 40 },
      { header: "Date", key: "date", width: 25 },
    ];
  }

  return { workbook, sheet };
}

// ✅ Test route
app.get("/test", (req, res) => {
  res.send("Server is working");
});

// ✅ Contact API
app.post("/contact", async (req, res) => {
  try {
    console.log("📩 API HIT:", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, msg: "Missing fields" });
    }

    const { workbook, sheet } = await getWorkbookAndSheet();

    sheet.addRow({
      name,
      email,
      message,
      date: new Date().toLocaleString(),
    });

    await workbook.xlsx.writeFile(FILE_PATH);

    console.log("✅ Data written to Excel");
    res.json({ success: true });
  } catch (error) {
    console.error("❌ Excel Write Error:", error);
    res.status(500).json({ success: false });
  }
});



// 📄 Read contacts from Excel
app.get("/contacts", async (req, res) => {
  try {
    res.setHeader("Cache-Control", "no-store");

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(FILE_PATH);

    const sheet = workbook.getWorksheet(SHEET_NAME);
    const data = [];

    sheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return;

      data.push({
        name: row.getCell(1).value,
        email: row.getCell(2).value,
        message: row.getCell(3).value,
        date: row.getCell(4).value,
      });
    });

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }
});



// ✅ Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
