// Choose pivot element
// All elements < pivot go before pivot
// All elements > pivot go after pivot
//
function partition(arr, low, high) {
    var pivot = arr[high];
    var i = (low - 1);
    for (var j = low; j <= high - 1; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}
function quickSort(arr, low, high) {
    if (low < high) {
        var pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
