let arr1 = [1, [2, 5], 6, 'uuu'];

var copyMass = function(arr) {
    var mass = [];
    for (var i = 0; i < arr.length; i++) {
        if ((typeof(arr[i]) != 'string') && (arr[i].length > 0)) {
            mass[i] = copyMass(arr[i]);
        } else {
            var item = arr[i];
            mass[i] = item;
        }
    }
    return(mass);
}

var arr2 = copyMass(arr1);
console.log(arr2);