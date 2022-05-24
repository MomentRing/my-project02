import thenFs from 'then-fs';

// !注意：第一个await前 代码会同步执行，第一个await后的代码会异步执行
console.log('A');
async function getAllFile() {
    console.log('B');
    const r1 = await thenFs.readFile('../files/1.txt', 'utf8')
    console.log(r1);
    const r2 = await thenFs.readFile('../files/2.txt', 'utf8')
    console.log(r2);
    const r3 = await thenFs.readFile('../files/3.txt', 'utf8')
    console.log(r3);
    console.log('D');
}

getAllFile()
console.log('E');