const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express backend!' });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});

module.exports = app; // For Vercel serverless
