const path = require('path');
const fs = require('fs');

function readFile(dirPath) {
  fs.readdir(dirPath, function(error, files) {
    files.forEach(filename => {
      fs.stat(path.join(dirPath, filename), function(err, stats){
        if (stats.isFile()) {
          // console.log(path.join(dirPath, filename));
          require("" + path.join(dirPath, filename));
        } else {
          // console.log('dir: ' + path.resolve(dirPath, filename));
          readFile(path.join(dirPath, filename));
        }
      })
    })
  });
}

readFile('./images');

