const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Enable CORS for frontend
app.use(express.json()); // Parse JSON request body

const mockRecords = [
  {
    id: 1,
    name: "Record 1",
    description: "This is the first record in our database",
  },
  {
    id: 2,
    name: "Record 2",
    description: "This is the second record with more detailed information",
  },
  {
    id: 3,
    name: "Record 3",
    description: "Third record containing important data about our users",
  },
  {
    id: 4,
    name: "Record 4",
    description: "Fourth record with statistical information about site usage",
  },
  {
    id: 5,
    name: "Record 5",
    description: "Fifth record with client feedback and suggestions",
  },
];

// API Routes
app.get("/api/records", (req, res) => {
  setTimeout(() => {
    res.status(200).json(mockRecords);
  }, 300);
});

app.get("/api/records/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const record = mockRecords.find((record) => record.id === id);

  if (record) {
    res.status(200).json(record);
  } else {
    res.status(404).json({ message: "Record not found" });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    user: "koshambiB",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Current time (UTC): ${new Date().toISOString()}`);
  console.log(`Server started by user: koshambiB`);
});
