const { writeFileSync } = require('fs')

for(let i=0;i<1000;i++){
    writeFileSync('./content/big-file.txt',`Hello World ${i} \n`,{flag: 'a'})
}