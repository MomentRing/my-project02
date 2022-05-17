const fs = require('fs');
fs.readFile('./test1/成绩.txt', 'UTF-8', (err, data) => {
    if (err) {
        return console.log('读取失败' + err.message);
    }
    // console.log('文件读取成功' + data);
    //* 先把成绩的数据，按照空格进行分割
    const arrOld = data.split(' ')
    console.log(arrOld);
    //* 循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', '：'))
    })

    //* 把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n')
    console.log(newStr);

    // *写入新文件
    fs.writeFile('./test1/chengjiok.txt', newStr, (err) => {
        if (err) {
            return console.log('成绩写入失败');
        }
        console.log('成绩写入成功');
    })
})