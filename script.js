function indexOfIgnoreCase(str, subStr) {
    if (!subStr) return 0; // return 0 if subStr is empty

    str = str.toLowerCase(); // convert both strings to lowercase for case-insensitive comparison
    subStr = subStr.toLowerCase();

    return str.indexOf(subStr); // use indexOf for case-insensitive search
}

// Example usage:
function indexOfIgnoreCase(str, subStr) {
  // write your code here
  if (!subStr) return 0; // return 0 if subStr is empty
  str = str.toLowerCase(); // convert both strings to lowercase for case-insensitive comparison
  subStr = subStr.toLowerCase();
  return str.indexOf(subStr); // use indexOf for case-insensitive search
}

// Example usage:
console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple")); // Output: 2
console.log(indexOfIgnoreCase("test", "aaa")); // Output: -1
