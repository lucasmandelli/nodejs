var fs = require('fs');

fs.writeFile('data.txt', 'Hello world', function(error) {
    if(error) {
        throw error;
    }
});

fs.readFile('data.txt', function(error, data) {
    if(error) {
        throw error;
    } else {
        console.log(data.toString('utf8'));
    }
});

fs.readdir('.', function(error, files) {
    if(error) {
        throw error;
    }

    for (var file in files) {
        console.log(files[file]);
    }
});

fs.readdirSync('.')
  .filter(function(file) {
    return (file.endsWith('.js'))
  })
  .forEach(function(file){
      console.log(file);
  });