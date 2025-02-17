const fs=require('fs');

fs.appendFile("./data.txt","I am appended data",(err) => {
    if (err)
        console.log(err);
    console.log("Data appended!");

});