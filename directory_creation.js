const fs = require('fs');

fs.mkdir('./test', (err, result) => {
    !err ? console.log("Test Directory Created !") : console.log("Test Directory Already Exists !");
});

fs.rmdir('./test', (err) => {
    if (!err)
        console.log("Test Directory deleted !")
    else if (err.code === 'ENOENT')
        console.log("No such Directory exists !");
    else if (err.code === 'ENOTEMPTY')
        console.log("Directory is not empty !");
    else
        console.log(err);
});
