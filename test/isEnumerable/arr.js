var arr = [12, 4, 43, 6554, 76];

Object.defineProperty(arr, "0", {
    value: 37,
    writable: false,
    enumerable: false,
    configurable: false
})

for (var index in arr) {
    console.log(index);
}

console.log("<br>")

for (var item of arr) {
    console.log(item);
}

