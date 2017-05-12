var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data){
  fs.writeFile('writeMe.txt', data);
});

// Delete Files Use ---->    fs.unlink('writeMe.txt')
