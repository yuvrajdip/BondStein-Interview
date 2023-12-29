
function findIndicesForSum(target, numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const currentSum = numbers[left] + numbers[right];

    if (currentSum === target) {
      
      return [left, right];
    } else if (currentSum < target) {
      
      left++;
    } else {
      right--;
    }
  }

  return null;
}


const targetNumber = 15;
const sortedNumbers = [2, 7, 11, 15];

const result = findIndicesForSum(targetNumber, sortedNumbers);

if (result) {
  const [index1, index2] = result;
  console.log(`Indices: ${index1}, ${index2}, Values: ${sortedNumbers[index1]}, ${sortedNumbers[index2]}`);
} else {
  console.log("No such pair found.");
}
