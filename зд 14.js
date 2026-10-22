function isCircleSorted(arr) {
    if (arr.length <= 1) return true;

    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex] || (arr[i] === arr[minIndex] && arr[i - 1] > arr[i])) {
            minIndex = i;
        }
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let current = arr[(minIndex + i) % arr.length];
        let next = arr[(minIndex + i + 1) % arr.length];
        if (current > next) {
            return false;
        }
    }

    return true;
}