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
    const len=arr.length
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



