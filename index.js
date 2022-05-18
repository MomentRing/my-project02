// !选择排序
const arr = [5, 4, 3, 2, 8];



// todo 编写一个找出数组中最小数的函数
const getMin = (arr) => {
    let min = arr[0];
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}

// todo 编写选择排序函数
const slectionSort = (arr) => {
    const len = arr.length
    const newArr = [];
    let smallest;
    for (let i = 0; i < len; i++) {
        smallest = getMin(arr);
        newArr.push(arr[smallest])
        console.log(smallest);
        arr.splice(smallest, 1);
    }
    return newArr;
}



/* // todo 定义交换数组内两数的函数
const swap = (arr, a, b) => {
    arr[a] = arr[a] ^ arr[b]
    arr[b] = arr[a] ^ arr[b]
    arr[a] = arr[a] ^ arr[b]
}
const slectionSort = (arr) => {
    let index;
    for (let i = 0; i < arr.length - 1; i++) {
        index = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[index]) {
                index = j;
            }
        }
        if (index != i) {
            swap(arr, i, index)
        }
    }
    return arr


} */
console.log(slectionSort(arr));





/* // 数组find方法
const people = [
    {
        name: "Matt",
        age: 27
    },
    {
        name: "Nicholas",
        age: 29
    }
];
const res = people.find((item, index, arr) => item.age < 28)

console.log(res);



let values = [0, 1, 5, 10, 15];
values.sort((a, b) => {
    return a - b
});
console.log(values);

let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let someResult = numbers.some((item, index, array) => item > 2);
console.log(someResult) // true


const str = 'qwe'
console.log(str.padStart(5, '|'));

let text = "cat, bat, sat, fat";
let pattern = /.at/g;
console.log(text.match(pattern));

let strText = "cd,at, sat, fat";
let pos = strText.search(/at/);
console.log(pos) */

let text = "cat, bat, sat, fat";
let result = text.replace(/at/g, "ond");
console.log(result); // "cond, bat, sat, fat"

let pattern = /.(at)/;
console.log(pattern.exec(text));
console.log(text.match(pattern));


var obj = {
    id: 1,
    name: "章三",
    msg: {
        age: 18,
    },
    arr: [1, 2, 3, 5, 6]
};



const o = {}
const deepcopy = (newObj, oldObj) => {
    for (k in oldObj) {
        item = oldObj[k];
        if (item instanceof Array) {
            newObj[k] = [];
            deepcopy(newObj[k], item);
        } else if (item instanceof Object) {
            newObj[k] = {};
            deepcopy(newObj[k], item);
        } else {
            newObj[k] = item
        }
    }
    return newObj
}
console.log(deepcopy(obj, o));