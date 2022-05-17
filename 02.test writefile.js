const fs = require('fs')
fs.writeFile('./test1/3.txt', 'chenggongla3', (err) => {
    if (err) {
        console.log('文件写入失败' + err.message);
    }
    else {
        console.log('文件写入成功');
    }
})