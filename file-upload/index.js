const makeDir = require("make-dir");
const fs = require("fs");
const sharp = require("sharp");

// Update Product
module.exports.upload_file = async (dir, files, size) => {
  try {
    var files_img = files.data === undefined ? files : [files];
    await makeDir(dir);

    if (!size || size.length === 0) {
    } else {
      var paths = await Promise.all(
        size.map((data) => makeDir(dir + "/resize/" + data + "x" + data))
      );
    }
    //   Write File
    var img_name = [];
    for (var i = 0; i < files_img.length; i++) {
      var newName = Date.now() + i + ".jpg";
      let data = await new Promise(async function (resolve, reject) {
        fs.writeFile(dir + "/" + newName, files_img[i].data, (err) => {
          if (err) {
            console.log(err);
            return resolve(false);
          } else {
            return resolve(newName);
          }
        });
      });
      img_name.push(data);
    }
    if (!size || size.length === 0) {
    } else {
      resize(dir, paths, img_name, size);
    }
    return img_name;
  } catch (err) {
    console.log(err);
  }
};

// Resize Product
const resize = async (dir, paths, newName, size) => {
  try {
    await newName.map((img_name) => {
      sharp(dir + "/" + img_name)
        .resize()
        .jpeg({ quality: 50, progressive: true })
        .toBuffer()
        .then((data) => {
          fs.writeFileSync(dir + "/" + img_name, data);
        })
        .catch((err) => {
          console.log(err);
        });
      paths.map((path, index) => {
        sharp(dir + "/" + img_name)
          .resize(size[index], size[index])
          .jpeg({ quality: 50, progressive: true })
          .toBuffer()
          .then((data) => {
            fs.writeFileSync(path + "/" + img_name, data);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  } catch (err) {}
};
