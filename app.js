const http = require("http");
const express = require("express");
const fileupload = require("express-fileupload");
const path = require("path");
const app = express();

const upload = require("file-upload-resize");

// File Middleware
app.use(fileupload());

app.post("/upload", async (req, res) => {
  try {
    // Root path
    const appRoot = path.resolve(__dirname);
    // Image path
    var dir = path.join(appRoot, "Image");
    const files = req.files.image;
    var image = await upload.upload_file(dir, files, [200, 500]);
    console.log(image);
  } catch (err) {
    res.status(400).json(err);
  }
});

const port = 3000;
const server = http.createServer(app);
console.log(port);

const listener = server.listen(port);
