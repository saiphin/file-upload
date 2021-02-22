# upload and resize multifile

upload and resize multifile

## install

```
 npm i express file-upload-resize
```

## General info

This project is simple easy for upload and resize multifile

## Technologies

Project is created with:

- Node JS
- Express

```
const express = require("express");
const { upload, useUpload, path } = require("file-upload-resize");
const app = express();

// File Middleware
app.use(useUpload());
```

## for No size Exsample 1

- create file app.js
  copy code to file app.js and run node app.js
  key upload image is (image)

```
const http = require("http");
const express = require("express");
const app = express();

const { upload, useUpload, path } = require("file-upload-resize");

// File Middleware
app.use(useUpload());

app.post("/upload", async (req, res) => {
  try {
    // Root path
    const appRoot = path.resolve(__dirname);
    // Image path
    var dir = path.join(appRoot, "Image");
    const files = req.files.image;
    var image = await upload(dir, files);
    console.log(image);
  } catch (err) {
    res.status(400).json(err);
  }
});

const port = 3000;
const server = http.createServer(app);
console.log(port);

const listener = server.listen(port);
```

## for size Exsample 2

```
app.post("/upload", async (req, res) => {
try {
// Root path
const appRoot = path.resolve(__dirname);
// Image path
var dir = path.join(appRoot, "Image");
const files = req.files.image;
var image = await upload(dir, files, [[200,200], [500,1000]]);
console.log(image);
} catch (err) {
res.status(400).json(err);
}
});
```
