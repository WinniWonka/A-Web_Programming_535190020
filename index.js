const fs = require('fs');

fs.readFile('wryyy.txt', function (err, data){
    if (err) 
    {
        console.log(err.stack);
    }
    else{
        console.log(data.toString());
    }
})