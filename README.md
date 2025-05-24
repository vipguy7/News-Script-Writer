# 📰 News Script Generator App — Getting Started

This app allows Myanmar media professionals to generate Burmese news scripts from uploaded files, URLs, or keywords using OpenAI and NewsAPI.

## 📦 Prerequisites
Make sure you have the following installed:

- Node.js (v16 or later)
- npm or yarn

## 📁 File Structure Overview
```
root/
├── file_parsing_utils.js
├── fetchNewsFromKeyword.js
├── index.js                 # Main Express server
├── .env                     # Environment variables (optional)
```

## 🔧 Setup
1. Clone the repository or copy the files into a folder
2. Navigate to the project directory:
   ```bash
   cd your-project-folder
   ```
3. Install dependencies:
   ```bash
   npm install express multer axios pdf-parse mammoth
   ```
4. Create a `.env` file in the root directory and add your OpenAI key:
   ```env
   OPENAI_API_KEY=your-openai-key-here
   ```
   Alternatively, set the variable in your shell before starting:
   ```bash
   export OPENAI_API_KEY=your-openai-key-here
   ```

## 🚀 Run the App
To start the server:
```bash
node index.js
```

The app will be available at:
```
http://localhost:3001
```

## 📤 Example Request (with curl)
```bash
curl -X POST http://localhost:3001/api/generate-script \
  -H "Content-Type: application/json" \
  -d '{
    "inputType": "keyword",
    "inputValue": "Myanmar 2021 coup",
    "length": "Standard"
  }'
```

## ✅ Input Types Supported
- `keyword` (uses NewsAPI to fetch article)
- `url` (fetches raw HTML content)
- `file` (PDF, DOCX, TXT — via `multipart/form-data`)

Let me know if you'd like a React-based front-end or Postman collection to test the endpoints.
