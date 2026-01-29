const minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let minDiff = Math.abs(arr[0] - arr[1]);
  let pairs = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const absDiff = Math.abs(arr[i] - arr[i + 1]);
    if (absDiff < minDiff) {
      minDiff = absDiff;
      pairs = [[arr[i], arr[i + 1]]];
    } else if (absDiff === minDiff) {
      pairs.push([arr[i], arr[i + 1]]);
    }
  }
  return pairs;
};
