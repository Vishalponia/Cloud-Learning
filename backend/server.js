// const express = require("express");
// const cors = require("cors");
// const ExcelJS = require("exceljs");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const FILE_PATH = path.join(__dirname, "contact-data.xlsx");
// const SHEET_NAME = "Contacts";

// // ✅ Ensure workbook & sheet always exist
// async function getWorkbookAndSheet() {
//   const workbook = new ExcelJS.Workbook();

//   if (fs.existsSync(FILE_PATH)) {
//     await workbook.xlsx.readFile(FILE_PATH);
//   }

//   let sheet = workbook.getWorksheet(SHEET_NAME);

//   if (!sheet) {
//     sheet = workbook.addWorksheet(SHEET_NAME);
//     sheet.columns = [
//       { header: "Name", key: "name", width: 25 },
//       { header: "Email", key: "email", width: 30 },
//       { header: "Message", key: "message", width: 40 },
//       { header: "Date", key: "date", width: 25 },
//     ];
//   }

//   return { workbook, sheet };
// }

// // ✅ Test route
// app.get("/test", (req, res) => {
//   res.send("Server is working");
// });

// // ✅ Contact API
// app.post("/contact", async (req, res) => {
//   try {
//     console.log("📩 API HIT:", req.body);

//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ success: false, msg: "Missing fields" });
//     }

//     const { workbook, sheet } = await getWorkbookAndSheet();

//     sheet.addRow({
//       name,
//       email,
//       message,
//       date: new Date().toLocaleString(),
//     });

//     await workbook.xlsx.writeFile(FILE_PATH);

//     console.log("✅ Data written to Excel");
//     res.json({ success: true });
//   } catch (error) {
//     console.error("❌ Excel Write Error:", error);
//     res.status(500).json({ success: false });
//   }
// });



// // 📄 Read contacts from Excel
// app.get("/contacts", async (req, res) => {
//   try {
//     res.setHeader("Cache-Control", "no-store");

//     const workbook = new ExcelJS.Workbook();
//     await workbook.xlsx.readFile(FILE_PATH);

//     const sheet = workbook.getWorksheet(SHEET_NAME);
//     const data = [];

//     sheet.eachRow((row, rowNumber) => {
//       if (rowNumber === 1) return;

//       data.push({
//         name: row.getCell(1).value,
//         email: row.getCell(2).value,
//         message: row.getCell(3).value,
//         date: row.getCell(4).value,
//       });
//     });

//     res.json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json([]);
//   }
// });



// // ✅ Start server
// app.listen(5000, () => {
//   console.log("🚀 Server running on http://localhost:5000");
// });




// // const express = require("express");
// // const cors = require("cors");
// // const ExcelJS = require("exceljs");
// // const fs = require("fs");
// // const path = require("path");

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // const FILE_PATH = path.join(__dirname, "contact-data_TEST.xlsx");
// // const SHEET_NAME = "Contacts";

// // // ✅ Create Excel file ONLY ONCE
// // async function initExcel() {
// //   if (!fs.existsSync(FILE_PATH)) {
// //     const workbook = new ExcelJS.Workbook();
// //     const sheet = workbook.addWorksheet(SHEET_NAME);

// //     sheet.columns = [
// //       { header: "Name", key: "name", width: 25 },
// //       { header: "Email", key: "email", width: 30 },
// //       { header: "Phone", key: "phone", width: 20 },
// //       { header: "Message", key: "message", width: 40 },
// //       { header: "Date", key: "date", width: 25 },
// //     ];

// //     await workbook.xlsx.writeFile(path.join(__dirname, "proof.xlsx"));
// //     console.log("📁 Excel file created");
// //   }
// // }

// // // ✅ Contact API
// // app.post("/contact", async (req, res) => {
// //   console.log("🔥 CONTACT API HIT");

// //   try {
// //     console.log("📩 BODY:", req.body);

// //     const workbook = new ExcelJS.Workbook();

// //     console.log("📂 Reading file:", FILE_PATH);
// //     await workbook.xlsx.readFile(FILE_PATH);

// //     const sheet = workbook.getWorksheet(SHEET_NAME);
// //     console.log("📄 Sheet found:", !!sheet);

// //     if (!sheet) {
// //       return res.status(500).json({ msg: "Sheet not found" });
// //     }

// //     sheet.addRow({
// //       name: req.body.name,
// //       email: req.body.email,
// //       phone: req.body.phone,
// //       message: req.body.message,
// //       date: new Date().toLocaleString(),
// //     });

// //     console.log("✍ Row added in memory");

// //     await workbook.xlsx.writeFile(FILE_PATH);
// //     console.log("💾 File written");

// //     res.json({ success: true });
// //   } catch (err) {
// //     console.error("❌ ERROR:", err);
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // 📄 Read Contacts
// // app.get("/contacts", async (req, res) => {
// //   try {
// //     const workbook = new ExcelJS.Workbook();
// //     await workbook.xlsx.readFile(FILE_PATH);
// //     const sheet = workbook.getWorksheet(SHEET_NAME);

// //     const data = [];

// //     sheet.eachRow((row, rowNumber) => {
// //       if (rowNumber === 1) return;
// //       data.push({
// //         name: row.getCell(1).value,
// //         email: row.getCell(2).value,
// //         phone: row.getCell(3).value,
// //         message: row.getCell(4).value,
// //         date: row.getCell(5).value,
// //       });
// //     });

// //     res.json(data);
// //   } catch (err) {
// //     res.status(500).json([]);
// //   }
// // });

// // // ✅ Start Server
// // app.listen(5000, async () => {
// //   await initExcel();
// //   console.log("🚀 Server running at http://localhost:5000");
// // });




// import express from "express";
// import fs from "fs";
// import path from "path";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const DATA_FILE = path.join(process.cwd(), "contacts.json");

// /* ======================
//    Helper functions
// ====================== */
// const readData = () => {
//   if (!fs.existsSync(DATA_FILE)) return [];
//   return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
// };

// const writeData = (data) => {
//   fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
// };

// /* ======================
//    POST: Save Contact
// ====================== */
// app.post("/contact", (req, res) => {
//   const { name, email, phone, message } = req.body;

//   if (!name || !email || !phone || !message) {
//     return res.status(400).json({ success: false, message: "Missing fields" });
//   }

//   const contacts = readData();

//   contacts.push({
//     id: Date.now(), // 🔑 unique id
//     name,
//     email,
//     phone,
//     message,
//     date: new Date().toLocaleString(),
//   });

//   writeData(contacts);

//   res.json({ success: true, message: "Saved successfully" });
// });

// /* ======================
//    GET: Admin Fetch
// ====================== */
// app.get("/admin/contacts", (req, res) => {
//   const contacts = readData();
//   res.json(contacts);
// });

// /* ======================
//    DELETE: Admin Delete
// ====================== */
// app.delete("/admin/contacts/:id", (req, res) => {
//   const id = Number(req.params.id);

//   let contacts = readData();

//   const before = contacts.length;
//   contacts = contacts.filter((c) => c.id !== id);

//   if (contacts.length === before) {
//     return res.status(404).json({ success: false, message: "Not found" });
//   }

//   writeData(contacts);
//   res.json({ success: true, message: "Deleted successfully" });
// });

// /* ======================
//    START SERVER
// ====================== */
// app.listen(5000, () => {
//   console.log("🚀 Server running on http://localhost:5000");
// });







import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(process.cwd(), "contacts.json");

/* helpers */
const readData = () => {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
};

const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

/* POST: save contact */
app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  const contacts = readData();
  contacts.push({
    id: Date.now(),
    name,
    email,
    phone,
    message,
    date: new Date().toLocaleString(),
  });

  writeData(contacts);
  res.json({ success: true });
});

/* GET: admin contacts */
app.get("/admin/contacts", (req, res) => {
  res.json(readData());
});

/* DELETE: admin delete */
app.delete("/admin/contacts/:id", (req, res) => {
  const id = Number(req.params.id);

  const contacts = readData();
  const updated = contacts.filter(c => c.id !== id);

  writeData(updated);
  res.json({ success: true });
});

/* start server */
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
