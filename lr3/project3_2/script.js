let arr = [0, -11, 11, 1, 12, 2, 0.1, 1.1, 22, 3, 100];
arr.sort(function howToSort(a, b) {
    return (a > b) ? 1 : -1;
});
console.log(arr.reverse());