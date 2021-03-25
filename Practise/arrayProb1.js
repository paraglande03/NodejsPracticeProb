var arr = [];


for (i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 100) + 100;

    arr.push(number)
}
console.log(arr)


function findSecondLargestElem(arr) {
    let first = -1,
        second = -1;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }
    console.log(second + " is second largest number is this array");
}
findSecondLargestElem(arr)

function findSecondsmallestElem(arr1) {
    let first1 = 1000,
        second1 = 1000;

    for (let i = 0; i <= arr1.length - 1; i++) {
        if (arr1[i] < first1) {
            second1 = first1;
            first1 = arr1[i];
        } else if (arr1[i] < second1 && arr1[i] != first1) {
            second1 = arr1[i];
        }
    }
    console.log(second1 + " is second smallest number is this array");
}
findSecondsmallestElem(arr)