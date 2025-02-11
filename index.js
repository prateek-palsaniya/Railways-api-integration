// const express = require('express');
// const dotenv = require('dotenv');
// const adminRoutes = require('./routes/adminRoutes');
// const userRoutes = require('./routes/userRoutes');

// dotenv.config();

// const app = express();
// app.use(express.json());

//  app.use('/admin', adminRoutes);
//  app.use('/user', userRoutes);


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 const express = require("express");
const app = express();
  const PORT = process.env.PORT || 3000;

// Middleware (if you haven't added it)
app.use(express.json());

// Root route to avoid "Cannot GET /" error
   app.get("/", (req, res) => {
  res.send("Welcome to the IRCTC Railway Management System API! Use Postman or a frontend client to access the API.");
});
// Import API routes (Make sure these are correctly defined)
    const userRoutes = require("./routes/userRoutes"); 
const adminRoutes = require("./routes/adminRoutes");

    app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

// Start the server
    app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
