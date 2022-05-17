const fs = require('fs')
fs.readFile('./test1/test1.txt', 'UTF-8', (err, data) => {
    if (err) {
        console.log('读取失败' + err.message);
    } else {
        console.log('读取成功' + data);
    }
})