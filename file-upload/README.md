# upload and resize multifile

upload and resize multifile

## install express-fileupload firt

```
* ipm i express-fileupload
```

## General info

This project is simple easy for upload and resize multifile

## Technologies

Project is created with:

- Node JS
- Express
- express-fileupload

## Setup

- ipm i express-fileupload file-upload-resize

```
const express = require("express");
const fileupload = require("express-fileupload");
const path = require("path");
const app = express();

app.use(fileupload());
```

## for No size Exsample

```
app.post("/upload", async (req, res) => {
try {
// Root path
const appRoot = path.resolve(\_\_dirname);
// Image path
var dir = path.join(appRoot, "Image");
const files = req.files.image;
var image = await upload.upload_file(dir, files);
console.log(image);
} catch (err) {
res.status(400).json(err);
}
});
```

## for size Exsample

```
app.post("/upload", async (req, res) => {
try {
// Root path
const appRoot = path.resolve(\_\_dirname);
// Image path
var dir = path.join(appRoot, "Image");
const files = req.files.image;
var image = await upload.upload_file(dir, files, [200, 500]);
console.log(image);
} catch (err) {
res.status(400).json(err);
}
});
```
