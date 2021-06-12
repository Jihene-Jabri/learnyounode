const fs = require("fs");
const path = require("path");
module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);
    const filtered = list.filter((doc) => path.extname(doc) === "." + ext);
    return callback(null, filtered);
  });
};
