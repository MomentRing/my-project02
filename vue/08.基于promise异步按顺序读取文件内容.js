import thenFs from "then-fs";
thenFs.readFile('../files/11.txt', 'utf8') //! 1.返回值是Promise的实例对象
    .catch(err => {
        console.log(err.message);
    })
    .then(r1 => { //! 2.通过.then为第一个Promise的实例指定成功之后的回调函数
        console.log(r1);
        return thenFs.readFile('../files/2.txt', 'utf8') //! 3.在第一个.then中返回一个新的Promise实例对象
    })
    .then(r2 => { //! 4.继续调用.then为上一个.then的返回值（新的Promise实例）指定成功之后的回调函数
        console.log(r2);
        return thenFs.readFile('../files/3.txt', 'utf8') //! 5.在第二个.then中再返回一个新的Promise实例对象
    })
    .then(r3 => { //! 6.继续调用.then为上一个.then的返回值（新的Promise实例）指定成功之后的回调函数
        console.log(r3);
    })
