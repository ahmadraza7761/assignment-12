// JS Assignment 12


// String handling
// Q no 1
// function findStringLength(str) {
//     return str.length;
//   }
  
//   // Example usage:
//   const inputString = "Hello, World!";
//   const lengthOfString = findStringLength(inputString);
//   console.log("Length of the string:", lengthOfString); // Output: 13
  // Q no 2

  // function copyString(source) {
//   let destination = source; // Simply assign the source string to the destination
//   return destination;
// }

// // Example usage:
// const sourceString = "Hello, World!";
// const copiedString = copyString(sourceString);
// console.log("Copied string:", copiedString); // Output: Hello, World!

// Q no 3
// function concatenateStrings(str1, str2) {
//     return str1 + str2;
//   }
  
//   // Example usage:
//   const string1 = "Hello, ";
//   const string2 = "World!";
//   const concatenatedString = concatenateStrings(string1, string2);
//   console.log("Concatenated string:", concatenatedString); // Output: Hello, World!
  
// // Q no 4
// function compareStringsIgnoreCase(str1, str2) {
//     return str1.toLowerCase() === str2.toLowerCase();
//   }
  
//   // Example usage:
//   const string1 = "Hello";
//   const string2 = "hello";
//   const areStringsEqual = compareStringsIgnoreCase(string1, string2);
//   console.log("Are the strings equal (case-insensitive)?", areStringsEqual); // Output: true
  

// Q no  5
// function convertToUppercase(str) {
//     return str.toUpperCase();
//   }
  
//   // Example usage:
//   const lowercaseString = "hello, world!";
//   const uppercaseString = convertToUppercase(lowercaseString);
//   console.log("Uppercase string:", uppercaseString); // Output: HELLO, WORLD!
  

// Q no 6
// function convertToLowercase(str) {
//     return str.toLowerCase();
//   }
  
//   // Example usage:
//   const uppercaseString = "HELLO, WORLD!";
//   const lowercaseString = convertToLowercase(uppercaseString);
//   console.log("Lowercase string:", lowercaseString); // Output: hello, world!


//   Q no 7
//   function toggleCase(str) {
//     let toggledString = '';
    
//     for (let i = 0; i < str.length; i++) {
//       const char = str.charAt(i);
//       if (char === char.toUpperCase()) {
//         toggledString += char.toLowerCase();
//       } else {
//         toggledString += char.toUpperCase();
//       }
//     }
  
//     return toggledString;
//   }
  
//   // Example usage:
//   const inputString = "Hello, World!";
//   const toggledString = toggleCase(inputString);
//   console.log("Toggled string:", toggledString); // Output: hELLO, wORLD!
  
// Q no  8

// function countCharacters(str) {
//     let alphabetCount = 0;
//     let digitCount = 0;
//     let specialCharCount = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       const char = str.charAt(i);
//       if (/[a-zA-Z]/.test(char)) {
//         alphabetCount++;
//       } else if (/[0-9]/.test(char)) {
//         digitCount++;
//       } else {
//         specialCharCount++;
//       }
//     }
  
//     return { alphabetCount, digitCount, specialCharCount };
//   }
  
//   // Example usage:
//   const inputString = "Hello, 123!";
//   const charCounts = countCharacters(inputString);
//   console.log("Alphabets count:", charCounts.alphabetCount); // Output: 5
//   console.log("Digits count:", charCounts.digitCount); // Output: 3
//   console.log("Special characters count:", charCounts.specialCharCount); // Output: 2
  

// Q no 9

// function countVowelsAndConsonants(str) {
//     const vowels = 'aeiouAEIOU';
//     let vowelCount = 0;
//     let consonantCount = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       const char = str.charAt(i);
//       if (/[a-zA-Z]/.test(char)) {
//         if (vowels.includes(char)) {
//           vowelCount++;
//         } else {
//           consonantCount++;
//         }
//       }
//     }
  
//     return { vowelCount, consonantCount };
//   }
  
//   // Example usage:
//   const inputString = "Hello, World!";
//   const charCounts = countVowelsAndConsonants(inputString);
//   console.log("Vowels count:", charCounts.vowelCount); // Output: 3
//   console.log("Consonants count:", charCounts.consonantCount); // Output: 7
  

// Q no 10
// function countWords(str) {
//     // Remove leading and trailing spaces
//     str = str.trim();
  
//     // Split the string into words using one or more spaces as the separator
//     const wordsArray = str.split(/\s+/);
  
//     // Filter out any empty strings (occurs if there are consecutive spaces)
//     const filteredWordsArray = wordsArray.filter(word => word !== "");
  
//     // Return the count of words
//     return filteredWordsArray.length;
//   }
  
//   // Example usage:
//   const inputString = "   Hello,   World!  ";
//   const wordCount = countWords(inputString);
//   console.log("Total number of words:", wordCount); // Output: 2
  
// Q no 11
// function reverseString(str) {
//     let reversedString = '';
  
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversedString += str.charAt(i);
//     }
  
//     return reversedString;
//   }
  
//   // Example usage:
//   const inputString = "Hello, World!";
//   const reversedString = reverseString(inputString);
//   console.log("Reversed string:", reversedString); // Output: "!dlroW ,olleH"
//   Q no  12
//   function isPalindrome(str) {
//     const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reversedStr = cleanStr.split('').reverse().join('');
//     return cleanStr === reversedStr;
//   }
  
//   // Example usage:
//   const inputString = "A man, a plan, a canal, Panama!";
//   const isPalindromeResult = isPalindrome(inputString);
//   console.log("Is palindrome:", isPalindromeResult); // Output: true

  
//   Q no 13

//   function reverseOrderOfWords(str) {
//     const wordsArray = str.split(/\s+/);
//     const reversedString = wordsArray.reverse().join(' ');
//     return reversedString;
//   }
  
//   // Example usage:
//   const inputString = "Hello, World!";
//   const reversedWordsString = reverseOrderOfWords(inputString);
//   console.log("Reversed words string:", reversedWordsString); // Output: "World! Hello,"
  


//   Q no 14
//   function findFirstOccurrence(str, char) {
//     return str.indexOf(char);
//   }
  
//   // Example usage:
//   const inputString = "Hello, World!";
//   const charToFind = 'o';
//   const firstOccurrenceIndex = findFirstOccurrence(inputString, charToFind);
//   console.log("First occurrence index:", firstOccurrenceIndex); // Output: 4
  




//   Q  no 15
//   function findLastOccurrence(str, char) {
//     return str.lastIndexOf(char);
//   }
  
//   // Example usage:
//   const inputString = "Hello, World!";
//   const charToFind = 'o';
//   const lastOccurrenceIndex = findLastOccurrence(inputString, charToFind);
//   console.log("Last occurrence index:", lastOccurrenceIndex); // Output: 8
  
// Q no 16
// function searchAllOccurrences(str, char) {
//     const indexes = [];
//     for (let i = 0; i < str.length; i++) {
//       if (str.charAt(i) === char) {
//         indexes.push(i);
//       }
//     }
//     return indexes;
//   }
  
//   // Example usage:
//   const inputString = "Hello, World!";
//   const charToSearch = 'o';
//   const occurrences = searchAllOccurrences(inputString, charToSearch);
//   console.log("Occurrences of 'o':", occurrences); // Output: [4, 7]
  
// Q no 17
// function countOccurrences(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str.charAt(i) === char) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   // Example usage:
//   const inputString = "Hello, World!";
//   const charToCount = 'o';
//   const occurrencesCount = countOccurrences(inputString, charToCount);
//   console.log("Occurrences of 'o':", occurrencesCount); // Output: 2
  
// Q no 18
// function findHighestFrequencyCharacter(str) {
//     const charFrequency = {};
//     for (let char of str) {
//       charFrequency[char] = (charFrequency[char] || 0) + 1;
//     }
  
//     let highestFrequency = 0;
//     let highestFrequencyChar = '';
//     for (let char in charFrequency) {
//       if (charFrequency[char] > highestFrequency) {
//         highestFrequency = charFrequency[char];
//         highestFrequencyChar = char;
//       }
//     }
  
//     return highestFrequencyChar;
//   }
  
//   // Example usage:
//   const inputString = "hello";
//   const highestFrequencyChar = findHighestFrequencyCharacter(inputString);
//   console.log("Highest frequency character:", highestFrequencyChar); // Output: "l"
  
// Q no 19
// function findLowestFrequencyCharacter(str) {
//     const charFrequency = {};
//     for (let char of str) {
//       charFrequency[char] = (charFrequency[char] || 0) + 1;
//     }
  
//     let lowestFrequency = Infinity;
//     let lowestFrequencyChar = '';
//     for (let char in charFrequency) {
//       if (charFrequency[char] < lowestFrequency) {
//         lowestFrequency = charFrequency[char];
//         lowestFrequencyChar = char;
//       }
//     }
  
//     return lowestFrequencyChar;
//   }
  
//   // Example usage:
//   const inputString = "hello";
//   const lowestFrequencyChar = findLowestFrequencyCharacter(inputString);
//   console.log("Lowest frequency character:", lowestFrequencyChar); // Output: "h"
  
// Q no  20
// function countCharacterFrequency(str) {
//     const charFrequency = {};
//     for (let char of str) {
//       charFrequency[char] = (charFrequency[char] || 0) + 1;
//     }
//     return charFrequency;
//   }
  
//   // Example usage:
//   const inputString = "hello";
//   const frequencyMap = countCharacterFrequency(inputString);
//   console.log("Frequency of each character:", frequencyMap); // Output: { h: 1, e: 1, l: 2, o: 1 }
  




// Q no 21
// function removeFirstOccurrence(str, charToRemove) {
//     const index = str.indexOf(charToRemove);
//     if (index !== -1) {
//       return str.slice(0, index) + str.slice(index + 1);
//     }
//     return str;
//   }
  
//   // Example usage:
//   const inputString = "banana";
//   const charToRemove = 'a';
//   const removedString = removeFirstOccurrence(inputString, charToRemove);
//   console.log("String after removing first 'a':", removedString); // Output: "bnana"
  
// Q no 22
// function removeLastOccurrence(str, charToRemove) {
//     const index = str.lastIndexOf(charToRemove);
//     if (index !== -1) {
//       return str.slice(0, index) + str.slice(index + 1);
//     }
//     return str;
//   }
  
//   // Example usage:
//   const inputString = "banana";
//   const charToRemove = 'a';
//   const removedString = removeLastOccurrence(inputString, charToRemove);
//   console.log("String after removing last 'a':", removedString); // Output: "banan"
  
// Q no 23
// function removeAllOccurrences(str, charToRemove) {
//     return str.split(charToRemove).join('');
//   }
  
//   // Example usage:
//   const inputString = "banana";
//   const charToRemove = 'a';
//   const removedString = removeAllOccurrences(inputString, charToRemove);
//   console.log("String after removing all 'a's:", removedString); // Output: "bnn"
  
// Q no 24

// function removeRepeatedCharacters(str) {
//     let result = '';
//     for (let char of str) {
//       if (result.indexOf(char) === -1) {
//         result += char;
//       }
//     }
//     return result;
//   }
  
//   // Example usage:
//   const inputString = "banana";
//   const removedRepeatedCharsString = removeRepeatedCharacters(inputString);
//   console.log("String after removing repeated characters:", removedRepeatedCharsString); // Output: "ban"
  
// Q no 25
// function replaceFirstOccurrence(str, charToReplace, replacement) {
//     const index = str.indexOf(charToReplace);
//     if (index !== -1) {
//       return str.slice(0, index) + replacement + str.slice(index + 1);
//     }
//     return str;
//   }
  
//   // Example usage:
//   const inputString = "banana";
//   const charToReplace = 'a';
//   const replacementChar = 'o';
//   const replacedString = replaceFirstOccurrence(inputString, charToReplace, replacementChar);
//   console.log("String after replacing first 'a' with 'o':", replacedString); // Output: "bonana"
  

// Q no 26
// function replaceLastOccurrence(str, charToReplace, replacement) {
//     const index = str.lastIndexOf(charToReplace);
//     if (index !== -1) {
//       return str.slice(0, index) + replacement + str.slice(index + 1);
//     }
//     return str;
//   }
  
//   // Example usage:
//   const inputString = "banana";
//   const charToReplace = 'a';
//   const replacementChar = 'o';
//   const replacedString = replaceLastOccurrence(inputString, charToReplace, replacementChar);
//   console.log("String after replacing last 'a' with 'o':", replacedString); // Output: "banano"
  

// Q no 27
// function replaceLastOccurrence(str, charToReplace, replacement) {
//     const lastIndex = str.lastIndexOf(charToReplace);
//     if (lastIndex !== -1) {
//       return str.slice(0, lastIndex) + replacement + str.slice(lastIndex + 1);
//     }
//     return str;
//   }
  
//   // Example usage:
//   const inputString = "banana";
//   const charToReplace = 'a';
//   const replacementChar = 'o';
//   const replacedString = replaceLastOccurrence(inputString, charToReplace, replacementChar);
//   console.log("String after replacing last 'a' with 'o':", replacedString); // Output: "banano"
  

// Q no 28

// function replaceAllOccurrences(str, charToReplace, replacement) {
//     const regex = new RegExp(charToReplace, 'g');
//     return str.replace(regex, replacement);
//   }
  
//   // Example usage:
//   const inputString = "banana";
//   const charToReplace = 'a';
//   const replacementChar = 'o';
//   const replacedString = replaceAllOccurrences(inputString, charToReplace, replacementChar);
//   console.log("String after replacing all 'a's with 'o':", replacedString); // Output: "bonono"
  
// Q no 29

// function findFirstOccurrenceOfWord(str, word) {
//     const wordIndex = str.indexOf(word);
//     if (wordIndex !== -1) {
//       return wordIndex;
//     }
//     return -1;
//   }
  
//   // Example usage:
//   const inputString = "Hello, this is a sample string";
//   const wordToFind = "is";
//   const firstOccurrenceIndex = findFirstOccurrenceOfWord(inputString, wordToFind);
//   console.log("First occurrence index of 'is':", firstOccurrenceIndex); // Output: 12
  
// Q no 30

// function findLastOccurrenceOfWord(str, word) {
//     const wordIndex = str.lastIndexOf(word);
//     if (wordIndex !== -1) {
//       return wordIndex;
//     }
//     return -1;
//   }
  
//   // Example usage:
//   const inputString = "Hello, this is a sample string. This is another example.";
//   const wordToFind = "is";
//   const lastOccurrenceIndex = findLastOccurrenceOfWord(inputString, wordToFind);
//   console.log("Last occurrence index of 'is':", lastOccurrenceIndex); // Output: 44
  
// Q no 31
// function searchAllOccurrencesOfWord(str, word) {
//     const indexes = [];
//     let index = str.indexOf(word);
//     while (index !== -1) {
//       indexes.push(index);
//       index = str.indexOf(word, index + 1);
//     }
//     return indexes;
//   }
  
//   // Example usage:
//   const inputString = "banana banana banana";
//   const wordToSearch = "ana";
//   const occurrences = searchAllOccurrencesOfWord(inputString, wordToSearch);
//   console.log("Occurrences of 'ana':", occurrences); // Output: [1, 4, 7]
  

// Q no 32
// function countOccurrencesOfWord(str, word) {
//     const regex = new RegExp(`\\b${word}\\b`, 'g');
//     const matches = str.match(regex);
//     return matches ? matches.length : 0;
//   }
  
//   // Example usage:
//   const inputString = "banana banana banana";
//   const wordToCount = "ana";
//   const occurrencesCount = countOccurrencesOfWord(inputString, wordToCount);
//   console.log("Occurrences of 'ana':", occurrencesCount); // Output: 3
      

// Q no 33

// function removeFirstOccurrenceOfWord(str, wordToRemove) {
//     const index = str.indexOf(wordToRemove);
//     if (index !== -1) {
//       return str.slice(0, index) + str.slice(index + wordToRemove.length);
//     }
//     return str;
//   }
  
//   // Example usage:
//   const inputString = "Hello, this is a sample string. This is another example.";
//   const wordToRemove = "is";
//   const removedString = removeFirstOccurrenceOfWord(inputString, wordToRemove);
//   console.log("String after removing first 'is':", removedString);
  
// Q no 34
// function removeLastOccurrenceOfWord(str, wordToRemove) {
//     const index = str.lastIndexOf(wordToRemove);
//     if (index !== -1) {
//       return str.slice(0, index) + str.slice(index + wordToRemove.length);
//     }
//     return str;
//   }
  
//   // Example usage:
//   const inputString = "Hello, this is a sample string. This is another example.";
//   const wordToRemove = "is";
//   const removedString = removeLastOccurrenceOfWord(inputString, wordToRemove);
//   console.log("String after removing last 'is':", removedString);
  
// Q no 35
// function removeAllOccurrencesOfWord(str, wordToRemove) {
//     const regex = new RegExp(`\\b${wordToRemove}\\b`, 'g');
//     return str.replace(regex, '');
//   }
  
//   // Example usage:
//   const inputString = "banana banana banana";
//   const wordToRemove = "ana";
//   const removedString = removeAllOccurrencesOfWord(inputString, wordToRemove);
//   console.log("String after removing all 'ana's:", removedString);
  
//   Q no 36
//   function trimLeadingWhitespace(str) {
//     return str.replace(/^\s+/, '');
//   }
  
//   // Example usage:
//   const inputString = "    Hello, World!";
//   const trimmedString = trimLeadingWhitespace(inputString);
//   console.log("String after trimming leading whitespaces:", trimmedString);
  
//   Q no 37
  
//   function trimTrailingWhitespace(str) {
//     return str.replace(/\s+$/, '');
//   }
  
//   // Example usage:
//   const inputString = "Hello, World!     ";
//   const trimmedString = trimTrailingWhitespace(inputString);
//   console.log("String after trimming trailing whitespaces:", trimmedString);
  
//   Q no 38
//   function trimBothWhitespace(str) {
//     return str.trim();
//   }
  
//   // Example usage:
//   const inputString = "    Hello, World!     ";
//   const trimmedString = trimBothWhitespace
  
  
  
// Array Handling
// Q no 1

// function printArrayElements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
//     }
//   }
  
//   // Example usage:
//   const array1 = [1, 2, 3, 4, 5];
//   printArrayElements(array1);
  
// Q no 2

// function printNegativeElements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < 0) {
//         console.log(arr[i]);
//       }
//     }
//   }
  
//   // Example usage:
//   const array2 = [1, -2, 3, -4, 5, -6];
//   printNegativeElements(array2);
  
// Q no 3


// function sumArrayElements(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }
  
//   // Example usage:
//   const array3 = [1, 2, 3, 4, 5];
//   const totalSum = sumArrayElements(array3);
//   console.log("Sum of array elements:", totalSum);
  
// Q no 4
// function findMaxMinElements(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//     }
//     return { max, min };
//   }
  
//   // Example usage:
//   const array4 = [3, 7, 1, 9, 5];
//   const { max, min } = findMaxMinElements(array4);
//   console.log("Maximum element:", max);
//   console.log("Minimum element:", min);
  
// Q no 5
// function findSecondLargest(arr) {
//     let largest = arr[0];
//     let secondLargest = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//       } else if (arr[i] > secondLargest && arr[i] !== largest) {
//         secondLargest = arr[i];
//       }
//     }
//     return secondLargest;
//   }
  
//   // Example usage:
//   const array5 = [3, 7, 1, 9, 5];
//   const secondLargestElement = findSecondLargest(array5);
//   console.log("Second largest element:", secondLargestElement);
  
// Q no 6
// function countEvenOddElements(arr) {
//     let evenCount = 0;
//     let oddCount = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         evenCount++;
//       } else {
//         oddCount++;
//       }
//     }
//     return { evenCount, oddCount };
//   }
  
//   // Example usage:
//   const array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const { evenCount, oddCount } = countEvenOddElements(array6);
//   console.log("Total even elements:", evenCount);
//   console.log("Total odd elements:", oddCount);
  
// Q no 7
// function countNegativeElements(arr) {
//     let negativeCount = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < 0) {
//         negativeCount++;
//       }
//     }
//     return negativeCount;
//   }
  
//   // Example usage:
//   const array7 = [1, -2, 3, -4, 5, -6];
//   const totalNegativeCount = countNegativeElements(array7);
//   console.log("Total negative elements:", totalNegativeCount);
  
// Q no 8
// function copyArray(arr) {
//     return [...arr];
//   }
  
//   // Example usage:
//   const array8 = [1, 2, 3, 4, 5];
//   const copiedArray = copyArray(array8);
//   console.log("Copied array:", copiedArray);
  
// Q no 9
// function insertElement(arr, element, position) {
//     arr.splice(position, 0, element);
//     return arr;
//   }
  
//   // Example usage:
//   const array9 = [1, 2, 3, 4, 5];
//   const insertedArray = insertElement(array9, 100, 2);
//   console.log("Array after inserting element:", insertedArray);
  
// Q no 10
// function deleteElement(arr, position) {
//     arr.splice(position, 1);
//     return arr;
//   }
  
//   // Example usage:
//   const array10 = [1, 2, 3, 4, 5];
//   const deletedArray = deleteElement(array10, 2);
//   console.log("Array after deleting element:", deletedArray);
  
// Q no 11
// function countElementFrequency(arr) {
//     const frequency = {};
  
//     for (const element of arr) {
//       frequency[element] = (frequency[element] || 0) + 1;
//     }
//     return frequency;
//   }
  
//   // Example usage:
//   const array11 = [1, 2, 3, 2, 1, 3, 3, 4, 5];
//   const elementFrequency = countElementFrequency(array11);
//   console.log("Element frequency:", elementFrequency);
  
// Q no 12
// function printUniqueElements(arr) {
//     const uniqueElements = Array.from(new Set(arr));
//     console.log("Unique elements:", uniqueElements);
//   }
  
//   // Example usage:
//   const array12 = [1, 2, 3, 2, 1, 3, 3, 4, 5];
//   printUniqueElements(array12);
  
// Q no 13
// function countDuplicateElements(arr) {
//     const elementFrequency = countElementFrequency(arr);
//     let duplicateCount = 0;
  
//     for (const element in elementFrequency) {
//       if (elementFrequency[element] > 1) {
//         duplicateCount++;
//       }
//     }
//     return duplicateCount;
//   }
  
//   // Example usage:
//   const array13 = [1, 2, 3, 2, 1, 3, 3, 4, 5];
//   const totalDuplicateCount = countDuplicateElements(array13);
//   console.log("Total duplicate elements:", totalDuplicateCount);
  
// Q no 14
// function deleteDuplicateElements(arr) {
//     return Array.from(new Set(arr));
//   }
  
//   // Example usage:
//   const array14 = [1, 2, 3, 2, 1, 3, 3, 4, 5];
//   const arrayWithoutDuplicates = deleteDuplicateElements(array14);
//   console.log("Array after deleting duplicates:", arrayWithoutDuplicates);
  
// Q no 15
// function mergeArrays(arr1, arr2) {
//     return arr1.concat(arr2);
//   }
  
//   // Example usage:
//   const array15a = [1, 2, 3];
//   const array15b = [4, 5, 6];
//   const mergedArray = mergeArrays(array15a, array15b);
//   console.log("Merged array:", mergedArray);
  
// Q no 16
// function reverseArray(arr) {
//     return arr.slice().reverse();
//   }
  
//   // Example usage:
//   const array16 = [1, 2, 3, 4, 5];
//   const reversedArray = reverseArray(array16);
//   console.log("Reversed array:", reversedArray);
  
//   Q no 17
//   function separateEvenOdd(arr) {
//     const evenArray = [];
//     const oddArray = [];
  
//     for (const element of arr) {
//       if (element % 2 === 0) {
//         evenArray.push(element);
//       } else {
//         oddArray.push(element);
//       }
//     }
  
//     return { evenArray, oddArray };
//   }
  
//   // Example usage:
//   const array17 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const { evenArray, oddArray } = separateEvenOdd(array17);
//   console.log("Even array:", evenArray);
//   console.log("Odd array:", oddArray);

  
//   Q no 18
//   function searchElement(arr, element) {
//     const index = arr.indexOf(element);
//     return index !== -1 ? `Element found at index ${index}` : "Element not found";
//   }
  
//   // Example usage:
//   const array18 = [1, 2, 3, 4, 5];
//   const elementToSearch = 3;
//   console.log(searchElement(array18, elementToSearch));
  
  
//   Q no 19
  
//   function sortArray(arr, order) {
//     if (order === 'ascending') {
//       return arr.slice().sort((a, b) => a - b);
//     } else if (order === 'descending') {
//       return arr.slice().sort((a, b) => b - a);
//     } else {
//       return "Invalid order. Use 'ascending' or 'descending'.";
//     }
//   }
  
//   // Example usage:
//   const array19 = [3, 1, 4, 2, 5];
//   console.log("Ascending order:", sortArray(array19, 'ascending'));
//   console.log("Descending order:", sortArray(array19, 'descending'));
  
//   Q no 20
//   function sortEvenOdd(arr) {
//     const evenArray = [];
//     const oddArray = [];
  
//     for (const element of arr) {
//       if (element % 2 === 0) {
//         evenArray.push(element);
//       } else {
//         oddArray.push(element);
//       }
//     }
  
//     return {
//       evenSorted: evenArray.sort((a, b) => a - b),
//       oddSorted: oddArray.sort((a, b) => a - b)
//     };
//   }
  
//   // Example usage:
//   const array20 = [3, 1, 4, 2, 5];
//   const { evenSorted, oddSorted } = sortEvenOdd(array20);
//   console.log("Even elements sorted:", evenSorted);
//   console.log("Odd elements sorted:", oddSorted);
  
  
//   Q no 21 

//   function leftRotateArray(arr, rotations) {
//     rotations = rotations % arr.length;
//     return arr.slice(rotations).concat(arr.slice(0, rotations));
//   }
  
//   // Example usage:
//   const array21 = [1, 2, 3, 4, 5];
//   const rotationsCount = 2;
//   console.log("Left rotated array:", leftRotateArray(array21, rotationsCount));
  
//   Q no 22
//   function rightRotateArray(arr, rotations) {
//     rotations = rotations % arr.length;
//     return arr.slice(-rotations).concat(arr.slice(0, -rotations));
//   }
  
//   // Example usage:
//   const array22 = [1, 2, 3, 4, 5];
//   const rotationsCount = 2;
//   console.log("Right rotated array:", rightRotateArray(array22, rotationsCount));
  