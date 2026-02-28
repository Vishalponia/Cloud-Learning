
// import express from "express";
// import fs from "fs";
// import path from "path";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const DATA_FILE = path.join(process.cwd(), "contacts.json");

// /* helpers */
// const readData = () => {
//   if (!fs.existsSync(DATA_FILE)) return [];
//   return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
// };

// const writeData = (data) => {
//   fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
// };

// /* POST: save contact */
// app.post("/contact", (req, res) => {
//   const { name, email, phone, message } = req.body;

//   const contacts = readData();
//   contacts.push({
//     id: Date.now(),
//     name,
//     email,
//     phone,
//     message,
//     date: new Date().toLocaleString(),
//   });

//   writeData(contacts);
//   res.json({ success: true });
// });

// /* GET: admin contacts */
// app.get("/admin/contacts", (req, res) => {
//   res.json(readData());
// });

// /* DELETE: admin delete */
// app.delete("/admin/contacts/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const contacts = readData();
//   const updated = contacts.filter(c => c.id !== id);

//   writeData(updated);
//   res.json({ success: true });
// });

// /* start server */
// app.listen(5000, () => {
//   console.log("🚀 Server running on http://localhost:5000");
// });









import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const app = express();
app.use(cors());
app.use(express.json());

const SECRET_KEY = "mysupersecretkey";

/* FILE PATHS */
const CONTACT_FILE = path.join(process.cwd(), "contacts.json");
const USER_FILE = path.join(process.cwd(), "users.json");

/* ---------------- HELPERS ---------------- */

const readFile = (file) => {
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, "utf-8"));
};

const writeFile = (file, data) => {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

/* ---------------- AUTH MIDDLEWARE ---------------- */

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: "No Token" });

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    req.user = verified;
    next();
  } catch {
    res.status(400).json({ message: "Invalid Token" });
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin Only" });
  }
  next();
};

/* =========================================================
   CONTACT ROUTES (OLD CODE SAFE - NOT TOUCHED)
========================================================= */

/* POST: save contact */
app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  const contacts = readFile(CONTACT_FILE);

  contacts.push({
    id: Date.now(),
    name,
    email,
    phone,
    message,
    date: new Date().toLocaleString(),
  });

  writeFile(CONTACT_FILE, contacts);
  res.json({ success: true });
});

/* DELETE: admin delete contact (OLD ROUTE SAFE) */
app.delete("/admin/contacts/:id", (req, res) => {
  const id = Number(req.params.id);

  const contacts = readFile(CONTACT_FILE);
  const updated = contacts.filter((c) => c.id !== id);

  writeFile(CONTACT_FILE, updated);
  res.json({ success: true });
});

/* =========================================================
   AUTH ROUTES (NEW)
========================================================= */

/* REGISTER */
app.post("/api/register", async (req, res) => {
  const { name, email, mobile, password } = req.body;

  const users = readFile(USER_FILE);

  const existing = users.find(
    (u) => u.email === email || u.mobile === mobile
  );

  if (existing) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    id: Date.now(),
    name,
    email,
    mobile,
    password: hashedPassword,
    role: "student", // default
  });

  writeFile(USER_FILE, users);

  res.json({ message: "Registered Successfully" });
});

/* LOGIN */
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const users = readFile(USER_FILE);

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    SECRET_KEY,
    { expiresIn: "1d" }
  );

  res.json({
    token,
    role: user.role,
    name: user.name,
  });
});

/* =========================================================
   NEW ADMIN ROUTE (CONTACT + USERS TOGETHER)
========================================================= */

app.get(
  "/admin/contacts",
  authMiddleware,
  adminMiddleware,
  (req, res) => {
    const contacts = readFile(CONTACT_FILE);
    const users = readFile(USER_FILE).map((u) => {
      const { password, ...safeUser } = u;
      return safeUser;
    });

    res.json({
      contacts,
      users,
    });
  }
);

/* ========================================================= */

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
