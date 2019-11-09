var arrayOfCards = [30,20,10];

var insertionSort = function insertionSort(nums) {
    for (var i = 1; i < nums.length; i++) {
      var j = i - 1;
      var tmp = nums[i];
      while (j >= 0 && nums[j] > tmp) {
        nums[j + 1] = nums[j]; j--;
      }
      nums[j + 1] = tmp;
    }
    return nums;
};


var arrayOfCards2 = [30, 21, 1, 99, 4];

function insertionSortWiqi(sortMe) {
    for (var i = 0; i < sortMe.length; ++i) {
        var tmp = sortMe[i];
        
        for (j = i - 1; j >= 0 && sortMe[j] > tmp; --j)
        sortMe[j + 1] = sortMe[j];
        sortMe[j + 1] = tmp;
    }
    return sortMe;
}
console.log(insertionSort(arrayOfCards));
console.log(insertionSortWiqi(arrayOfCards2));