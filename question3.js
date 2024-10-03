/*
Jessica Lee 
Student Id: 101445909 

Question 3: File Module
● Create a script that will do the following:
1. Remove Log files
o remove all the files from the Logs directory, if exists
o output the file names to delete
o remove the Logs directory
2. Create Log files
o create a Logs directory, if it does not exist
o change the current process to the new Logs directory
o create 10 log files and write some text into the file
o output the files names to console
o Hint: use the fs module and path module, and the process current working directory to build directory path. It is acceptable, to have a remove.js script and separate add.js script.
> Output
Log0.txt
…
Log9.txt
Delete files … log0.txt
…
Delete files… log9.text
*/


const fs = require('fs');
const path = require('path');
const logs = path.join(__dirname, 'Logs');

fs.mkdirSync(logs, { recursive: true });

for (let i = 0; i < 10; i++) {

    const logFile = path.join(logs, `Log${i}.txt`);
    fs.writeFileSync(logFile, `This is a log file with some text. Log ${i}`);
    console.log(`Log${i}.txt`); 

}

if (fs.existsSync(logs)) {

    const files = fs.readdirSync(logs);
    files.forEach(file => {

        console.log(`Deleting files... ${file}`);
        fs.unlinkSync(path.join(logs, file));

    });

    fs.rmdirSync(logs);
}



