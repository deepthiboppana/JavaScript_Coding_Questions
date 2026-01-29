// Problem Database
const problems = [
  // Arrays Category
  {
    id: 1,
    title: "Sum of Array",
    category: "arrays",
    difficulty: "easy",
    description: "Write a function that takes an array of numbers and returns their sum.",
    examples: [
      { input: "[1, 2, 3, 4, 5]", output: "15" },
      { input: "[10, 20, 30]", output: "60" }
    ],
    starterCode: "function sumArray(arr) {\n  // Your code here\n  \n}",
    solution: "function sumArray(arr) {\n  return arr.reduce((sum, num) => sum + num, 0);\n}",
    testCases: [
      { input: [[1, 2, 3, 4, 5]], expected: 15 },
      { input: [[10, 20, 30]], expected: 60 },
      { input: [[]], expected: 0 },
      { input: [[-1, -2, -3]], expected: -6 }
    ],
    hint: "Consider using the reduce() method to accumulate the sum."
  },
  {
    id: 2,
    title: "Find Maximum",
    category: "arrays",
    difficulty: "easy",
    description: "Write a function that finds and returns the maximum number in an array.",
    examples: [
      { input: "[3, 7, 2, 9, 1]", output: "9" },
      { input: "[-5, -2, -10]", output: "-2" }
    ],
    starterCode: "function findMax(arr) {\n  // Your code here\n  \n}",
    solution: "function findMax(arr) {\n  return Math.max(...arr);\n}",
    testCases: [
      { input: [[3, 7, 2, 9, 1]], expected: 9 },
      { input: [[-5, -2, -10]], expected: -2 },
      { input: [[100]], expected: 100 },
      { input: [[0, 0, 0]], expected: 0 }
    ],
    hint: "You can use Math.max() with the spread operator."
  },
  {
    id: 3,
    title: "Remove Duplicates",
    category: "arrays",
    difficulty: "medium",
    description: "Write a function that removes duplicate values from an array and returns a new array with unique values.",
    examples: [
      { input: "[1, 2, 2, 3, 4, 4, 5]", output: "[1, 2, 3, 4, 5]" },
      { input: "['a', 'b', 'a', 'c']", output: "['a', 'b', 'c']" }
    ],
    starterCode: "function removeDuplicates(arr) {\n  // Your code here\n  \n}",
    solution: "function removeDuplicates(arr) {\n  return [...new Set(arr)];\n}",
    testCases: [
      { input: [[1, 2, 2, 3, 4, 4, 5]], expected: [1, 2, 3, 4, 5] },
      { input: [['a', 'b', 'a', 'c']], expected: ['a', 'b', 'c'] },
      { input: [[1, 1, 1]], expected: [1] },
      { input: [[]], expected: [] }
    ],
    hint: "The Set object can help you store unique values."
  },
  {
    id: 4,
    title: "Chunk Array",
    category: "arrays",
    difficulty: "medium",
    description: "Write a function that splits an array into chunks of a specified size.",
    examples: [
      { input: "[1, 2, 3, 4, 5, 6, 7, 8], 3", output: "[[1, 2, 3], [4, 5, 6], [7, 8]]" }
    ],
    starterCode: "function chunkArray(arr, size) {\n  // Your code here\n  \n}",
    solution: "function chunkArray(arr, size) {\n  const chunks = [];\n  for (let i = 0; i < arr.length; i += size) {\n    chunks.push(arr.slice(i, i + size));\n  }\n  return chunks;\n}",
    testCases: [
      { input: [[1, 2, 3, 4, 5, 6, 7, 8], 3], expected: [[1, 2, 3], [4, 5, 6], [7, 8]] },
      { input: [[1, 2, 3, 4], 2], expected: [[1, 2], [3, 4]] },
      { input: [[1, 2, 3], 5], expected: [[1, 2, 3]] }
    ],
    hint: "Use a loop and the slice() method to create chunks."
  },
  {
    id: 5,
    title: "Flatten Array",
    category: "arrays",
    difficulty: "medium",
    description: "Write a function that flattens a nested array into a single-level array.",
    examples: [
      { input: "[1, [2, 3], [4, [5, 6]]]", output: "[1, 2, 3, 4, 5, 6]" }
    ],
    starterCode: "function flattenArray(arr) {\n  // Your code here\n  \n}",
    solution: "function flattenArray(arr) {\n  return arr.flat(Infinity);\n}",
    testCases: [
      { input: [[1, [2, 3], [4, [5, 6]]]], expected: [1, 2, 3, 4, 5, 6] },
      { input: [[[1, 2], [3, 4]]], expected: [1, 2, 3, 4] },
      { input: [[1, 2, 3]], expected: [1, 2, 3] }
    ],
    hint: "The flat() method can flatten nested arrays. Use Infinity for deep flattening."
  },
  {
    id: 6,
    title: "Array Intersection",
    category: "arrays",
    difficulty: "medium",
    description: "Write a function that returns the intersection of two arrays (common elements).",
    examples: [
      { input: "[1, 2, 3, 4], [3, 4, 5, 6]", output: "[3, 4]" }
    ],
    starterCode: "function arrayIntersection(arr1, arr2) {\n  // Your code here\n  \n}",
    solution: "function arrayIntersection(arr1, arr2) {\n  return arr1.filter(item => arr2.includes(item));\n}",
    testCases: [
      { input: [[1, 2, 3, 4], [3, 4, 5, 6]], expected: [3, 4] },
      { input: [['a', 'b', 'c'], ['b', 'c', 'd']], expected: ['b', 'c'] },
      { input: [[1, 2], [3, 4]], expected: [] }
    ],
    hint: "Use filter() and includes() methods together."
  },

  // Strings Category
  {
    id: 7,
    title: "Reverse String",
    category: "strings",
    difficulty: "easy",
    description: "Write a function that reverses a string.",
    examples: [
      { input: "'hello'", output: "'olleh'" },
      { input: "'JavaScript'", output: "'tpircSavaJ'" }
    ],
    starterCode: "function reverseString(str) {\n  // Your code here\n  \n}",
    solution: "function reverseString(str) {\n  return str.split('').reverse().join('');\n}",
    testCases: [
      { input: ['hello'], expected: 'olleh' },
      { input: ['JavaScript'], expected: 'tpircSavaJ' },
      { input: [''], expected: '' },
      { input: ['a'], expected: 'a' }
    ],
    hint: "Convert the string to an array, reverse it, then join it back."
  },
  {
    id: 8,
    title: "Palindrome Check",
    category: "strings",
    difficulty: "easy",
    description: "Write a function that checks if a string is a palindrome (reads the same forwards and backwards).",
    examples: [
      { input: "'racecar'", output: "true" },
      { input: "'hello'", output: "false" }
    ],
    starterCode: "function isPalindrome(str) {\n  // Your code here\n  \n}",
    solution: "function isPalindrome(str) {\n  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return cleaned === cleaned.split('').reverse().join('');\n}",
    testCases: [
      { input: ['racecar'], expected: true },
      { input: ['hello'], expected: false },
      { input: ['A man a plan a canal Panama'], expected: true },
      { input: [''], expected: true }
    ],
    hint: "Clean the string, then compare it with its reverse."
  },
  {
    id: 9,
    title: "Count Vowels",
    category: "strings",
    difficulty: "easy",
    description: "Write a function that counts the number of vowels in a string.",
    examples: [
      { input: "'hello world'", output: "3" },
      { input: "'JavaScript'", output: "3" }
    ],
    starterCode: "function countVowels(str) {\n  // Your code here\n  \n}",
    solution: "function countVowels(str) {\n  const matches = str.match(/[aeiou]/gi);\n  return matches ? matches.length : 0;\n}",
    testCases: [
      { input: ['hello world'], expected: 3 },
      { input: ['JavaScript'], expected: 3 },
      { input: ['xyz'], expected: 0 },
      { input: ['AEIOU'], expected: 5 }
    ],
    hint: "Use a regular expression to match vowels."
  },
  {
    id: 10,
    title: "Title Case",
    category: "strings",
    difficulty: "medium",
    description: "Write a function that converts a string to title case (first letter of each word capitalized).",
    examples: [
      { input: "'hello world'", output: "'Hello World'" },
      { input: "'javascript is awesome'", output: "'Javascript Is Awesome'" }
    ],
    starterCode: "function titleCase(str) {\n  // Your code here\n  \n}",
    solution: "function titleCase(str) {\n  return str.split(' ').map(word => \n    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()\n  ).join(' ');\n}",
    testCases: [
      { input: ['hello world'], expected: 'Hello World' },
      { input: ['javascript is awesome'], expected: 'Javascript Is Awesome' },
      { input: ['a'], expected: 'A' },
      { input: [''], expected: '' }
    ],
    hint: "Split the string into words, capitalize each, then join them back."
  },
  {
    id: 11,
    title: "Anagram Check",
    category: "strings",
    difficulty: "medium",
    description: "Write a function that checks if two strings are anagrams (contain the same characters in different order).",
    examples: [
      { input: "'listen', 'silent'", output: "true" },
      { input: "'hello', 'world'", output: "false" }
    ],
    starterCode: "function areAnagrams(str1, str2) {\n  // Your code here\n  \n}",
    solution: "function areAnagrams(str1, str2) {\n  const clean = str => str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');\n  return clean(str1) === clean(str2);\n}",
    testCases: [
      { input: ['listen', 'silent'], expected: true },
      { input: ['hello', 'world'], expected: false },
      { input: ['Astronomer', 'Moon starer'], expected: true },
      { input: ['', ''], expected: true }
    ],
    hint: "Clean both strings, sort their characters, and compare."
  },

  // Objects Category
  {
    id: 12,
    title: "Object Keys Count",
    category: "objects",
    difficulty: "easy",
    description: "Write a function that counts the number of keys in an object.",
    examples: [
      { input: "{ a: 1, b: 2, c: 3 }", output: "3" }
    ],
    starterCode: "function countKeys(obj) {\n  // Your code here\n  \n}",
    solution: "function countKeys(obj) {\n  return Object.keys(obj).length;\n}",
    testCases: [
      { input: [{ a: 1, b: 2, c: 3 }], expected: 3 },
      { input: [{}], expected: 0 },
      { input: [{ name: 'John', age: 30 }], expected: 2 }
    ],
    hint: "Use Object.keys() to get an array of keys."
  },
  {
    id: 13,
    title: "Merge Objects",
    category: "objects",
    difficulty: "easy",
    description: "Write a function that merges two objects into one.",
    examples: [
      { input: "{ a: 1 }, { b: 2 }", output: "{ a: 1, b: 2 }" }
    ],
    starterCode: "function mergeObjects(obj1, obj2) {\n  // Your code here\n  \n}",
    solution: "function mergeObjects(obj1, obj2) {\n  return { ...obj1, ...obj2 };\n}",
    testCases: [
      { input: [{ a: 1 }, { b: 2 }], expected: { a: 1, b: 2 } },
      { input: [{ x: 10 }, { y: 20, z: 30 }], expected: { x: 10, y: 20, z: 30 } },
      { input: [{}, { a: 1 }], expected: { a: 1 } }
    ],
    hint: "Use the spread operator (...) to merge objects."
  },
  {
    id: 14,
    title: "Invert Object",
    category: "objects",
    difficulty: "medium",
    description: "Write a function that inverts an object (swaps keys and values).",
    examples: [
      { input: "{ a: '1', b: '2' }", output: "{ '1': 'a', '2': 'b' }" }
    ],
    starterCode: "function invertObject(obj) {\n  // Your code here\n  \n}",
    solution: "function invertObject(obj) {\n  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));\n}",
    testCases: [
      { input: [{ a: '1', b: '2' }], expected: { '1': 'a', '2': 'b' } },
      { input: [{ name: 'John', age: '30' }], expected: { John: 'name', '30': 'age' } }
    ],
    hint: "Use Object.entries() and Object.fromEntries() with map()."
  },
  {
    id: 15,
    title: "Deep Clone",
    category: "objects",
    difficulty: "medium",
    description: "Write a function that creates a deep clone of an object.",
    examples: [
      { input: "{ a: 1, b: { c: 2 } }", output: "{ a: 1, b: { c: 2 } }" }
    ],
    starterCode: "function deepClone(obj) {\n  // Your code here\n  \n}",
    solution: "function deepClone(obj) {\n  return JSON.parse(JSON.stringify(obj));\n}",
    testCases: [
      { input: [{ a: 1, b: { c: 2 } }], expected: { a: 1, b: { c: 2 } } },
      { input: [{ x: [1, 2, 3] }], expected: { x: [1, 2, 3] } }
    ],
    hint: "JSON.parse() and JSON.stringify() can create a deep copy."
  },
  {
    id: 16,
    title: "Group By Property",
    category: "objects",
    difficulty: "hard",
    description: "Write a function that groups an array of objects by a specified property.",
    examples: [
      { input: "[{type:'fruit',name:'apple'},{type:'veg',name:'carrot'}], 'type'", output: "{fruit:[{type:'fruit',name:'apple'}],veg:[{type:'veg',name:'carrot'}]}" }
    ],
    starterCode: "function groupBy(arr, property) {\n  // Your code here\n  \n}",
    solution: "function groupBy(arr, property) {\n  return arr.reduce((acc, obj) => {\n    const key = obj[property];\n    if (!acc[key]) acc[key] = [];\n    acc[key].push(obj);\n    return acc;\n  }, {});\n}",
    testCases: [
      { input: [[{type:'fruit',name:'apple'},{type:'veg',name:'carrot'},{type:'fruit',name:'banana'}], 'type'], 
        expected: {fruit:[{type:'fruit',name:'apple'},{type:'fruit',name:'banana'}],veg:[{type:'veg',name:'carrot'}]} }
    ],
    hint: "Use reduce() to build an object with grouped arrays."
  },

  // Functions Category
  {
    id: 17,
    title: "Factorial",
    category: "functions",
    difficulty: "easy",
    description: "Write a function that calculates the factorial of a number.",
    examples: [
      { input: "5", output: "120" },
      { input: "3", output: "6" }
    ],
    starterCode: "function factorial(n) {\n  // Your code here\n  \n}",
    solution: "function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}",
    testCases: [
      { input: [5], expected: 120 },
      { input: [3], expected: 6 },
      { input: [0], expected: 1 },
      { input: [1], expected: 1 }
    ],
    hint: "Use recursion or a loop to multiply numbers from 1 to n."
  },
  {
    id: 18,
    title: "Fibonacci",
    category: "functions",
    difficulty: "medium",
    description: "Write a function that returns the nth Fibonacci number.",
    examples: [
      { input: "6", output: "8" },
      { input: "10", output: "55" }
    ],
    starterCode: "function fibonacci(n) {\n  // Your code here\n  \n}",
    solution: "function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}",
    testCases: [
      { input: [6], expected: 8 },
      { input: [10], expected: 55 },
      { input: [0], expected: 0 },
      { input: [1], expected: 1 }
    ],
    hint: "Use recursion: fib(n) = fib(n-1) + fib(n-2)."
  },
  {
    id: 19,
    title: "Debounce Function",
    category: "functions",
    difficulty: "hard",
    description: "Write a debounce function that delays invoking a function until after a specified time has elapsed.",
    examples: [
      { input: "function, 1000", output: "debounced function" }
    ],
    starterCode: "function debounce(func, delay) {\n  // Your code here\n  \n}",
    solution: "function debounce(func, delay) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => func.apply(this, args), delay);\n  };\n}",
    testCases: [
      { input: [() => 42, 100], expected: 'function' }
    ],
    hint: "Use setTimeout and clearTimeout to delay execution."
  },
  {
    id: 20,
    title: "Curry Function",
    category: "functions",
    difficulty: "hard",
    description: "Write a function that curries another function (transforms f(a,b,c) into f(a)(b)(c)).",
    examples: [
      { input: "add(a, b, c) => add(1)(2)(3)", output: "6" }
    ],
    starterCode: "function curry(func) {\n  // Your code here\n  \n}",
    solution: "function curry(func) {\n  return function curried(...args) {\n    if (args.length >= func.length) {\n      return func.apply(this, args);\n    }\n    return function(...nextArgs) {\n      return curried.apply(this, args.concat(nextArgs));\n    };\n  };\n}",
    testCases: [
      { input: [(a, b, c) => a + b + c], expected: 'function' }
    ],
    hint: "Return a function that collects arguments until all are provided."
  },
  {
    id: 21,
    title: "Memoization",
    category: "functions",
    difficulty: "hard",
    description: "Write a memoize function that caches the results of expensive function calls.",
    examples: [
      { input: "expensive function", output: "memoized function" }
    ],
    starterCode: "function memoize(func) {\n  // Your code here\n  \n}",
    solution: "function memoize(func) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (key in cache) return cache[key];\n    const result = func.apply(this, args);\n    cache[key] = result;\n    return result;\n  };\n}",
    testCases: [
      { input: [(x) => x * 2], expected: 'function' }
    ],
    hint: "Store results in an object using arguments as keys."
  },

  // Algorithms Category
  {
    id: 22,
    title: "Binary Search",
    category: "algorithms",
    difficulty: "medium",
    description: "Write a function that performs binary search on a sorted array.",
    examples: [
      { input: "[1, 2, 3, 4, 5, 6, 7], 5", output: "4" }
    ],
    starterCode: "function binarySearch(arr, target) {\n  // Your code here\n  \n}",
    solution: "function binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}",
    testCases: [
      { input: [[1, 2, 3, 4, 5, 6, 7], 5], expected: 4 },
      { input: [[1, 2, 3, 4, 5], 1], expected: 0 },
      { input: [[1, 2, 3], 10], expected: -1 }
    ],
    hint: "Compare the middle element and adjust the search range."
  },
  {
    id: 23,
    title: "Bubble Sort",
    category: "algorithms",
    difficulty: "medium",
    description: "Write a function that sorts an array using the bubble sort algorithm.",
    examples: [
      { input: "[5, 3, 8, 4, 2]", output: "[2, 3, 4, 5, 8]" }
    ],
    starterCode: "function bubbleSort(arr) {\n  // Your code here\n  \n}",
    solution: "function bubbleSort(arr) {\n  const n = arr.length;\n  for (let i = 0; i < n - 1; i++) {\n    for (let j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n      }\n    }\n  }\n  return arr;\n}",
    testCases: [
      { input: [[5, 3, 8, 4, 2]], expected: [2, 3, 4, 5, 8] },
      { input: [[1, 2, 3]], expected: [1, 2, 3] },
      { input: [[3, 2, 1]], expected: [1, 2, 3] }
    ],
    hint: "Compare adjacent elements and swap if needed."
  },
  {
    id: 24,
    title: "Two Sum",
    category: "algorithms",
    difficulty: "medium",
    description: "Write a function that finds two numbers in an array that add up to a target sum.",
    examples: [
      { input: "[2, 7, 11, 15], 9", output: "[0, 1]" }
    ],
    starterCode: "function twoSum(arr, target) {\n  // Your code here\n  \n}",
    solution: "function twoSum(arr, target) {\n  const map = {};\n  for (let i = 0; i < arr.length; i++) {\n    const complement = target - arr[i];\n    if (complement in map) return [map[complement], i];\n    map[arr[i]] = i;\n  }\n  return [];\n}",
    testCases: [
      { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { input: [[3, 2, 4], 6], expected: [1, 2] },
      { input: [[1, 2, 3], 10], expected: [] }
    ],
    hint: "Use a hash map to store numbers you've seen."
  },
  {
    id: 25,
    title: "Valid Parentheses",
    category: "algorithms",
    difficulty: "medium",
    description: "Write a function that checks if a string of parentheses is valid.",
    examples: [
      { input: "'()[]{}' ", output: "true" },
      { input: "'([)]'", output: "false" }
    ],
    starterCode: "function isValidParentheses(s) {\n  // Your code here\n  \n}",
    solution: "function isValidParentheses(s) {\n  const stack = [];\n  const pairs = { '(': ')', '[': ']', '{': '}' };\n  for (let char of s) {\n    if (char in pairs) stack.push(char);\n    else if (pairs[stack.pop()] !== char) return false;\n  }\n  return stack.length === 0;\n}",
    testCases: [
      { input: ['()[]{}'], expected: true },
      { input: ['([)]'], expected: false },
      { input: ['()'], expected: true },
      { input: ['('], expected: false }
    ],
    hint: "Use a stack to track opening brackets."
  },
  {
    id: 26,
    title: "Longest Common Prefix",
    category: "algorithms",
    difficulty: "easy",
    description: "Write a function that finds the longest common prefix among an array of strings.",
    examples: [
      { input: "['flower', 'flow', 'flight']", output: "'fl'" }
    ],
    starterCode: "function longestCommonPrefix(strs) {\n  // Your code here\n  \n}",
    solution: "function longestCommonPrefix(strs) {\n  if (!strs.length) return '';\n  let prefix = strs[0];\n  for (let i = 1; i < strs.length; i++) {\n    while (strs[i].indexOf(prefix) !== 0) {\n      prefix = prefix.slice(0, -1);\n      if (!prefix) return '';\n    }\n  }\n  return prefix;\n}",
    testCases: [
      { input: [['flower', 'flow', 'flight']], expected: 'fl' },
      { input: [['dog', 'racecar', 'car']], expected: '' },
      { input: [['test', 'testing', 'tester']], expected: 'test' }
    ],
    hint: "Start with the first string and reduce it until it matches all."
  },
  {
    id: 27,
    title: "Prime Number Check",
    category: "algorithms",
    difficulty: "easy",
    description: "Write a function that checks if a number is prime.",
    examples: [
      { input: "7", output: "true" },
      { input: "10", output: "false" }
    ],
    starterCode: "function isPrime(n) {\n  // Your code here\n  \n}",
    solution: "function isPrime(n) {\n  if (n <= 1) return false;\n  if (n <= 3) return true;\n  if (n % 2 === 0 || n % 3 === 0) return false;\n  for (let i = 5; i * i <= n; i += 6) {\n    if (n % i === 0 || n % (i + 2) === 0) return false;\n  }\n  return true;\n}",
    testCases: [
      { input: [7], expected: true },
      { input: [10], expected: false },
      { input: [2], expected: true },
      { input: [1], expected: false }
    ],
    hint: "Check divisibility up to the square root of n."
  },

  // DOM Category
  {
    id: 28,
    title: "Get Element by ID",
    category: "dom",
    difficulty: "easy",
    description: "Write a function that mimics document.getElementById() using querySelector.",
    examples: [
      { input: "'myId'", output: "element" }
    ],
    starterCode: "function getById(id) {\n  // Your code here\n  \n}",
    solution: "function getById(id) {\n  return document.querySelector(`#${id}`);\n}",
    testCases: [
      { input: ['test'], expected: 'element' }
    ],
    hint: "Use querySelector with a # selector."
  },
  {
    id: 29,
    title: "Toggle Class",
    category: "dom",
    difficulty: "easy",
    description: "Write a function that toggles a CSS class on an element.",
    examples: [
      { input: "element, 'active'", output: "toggled" }
    ],
    starterCode: "function toggleClass(element, className) {\n  // Your code here\n  \n}",
    solution: "function toggleClass(element, className) {\n  element.classList.toggle(className);\n}",
    testCases: [
      { input: [{ classList: { toggle: () => {} } }, 'active'], expected: undefined }
    ],
    hint: "Use the classList.toggle() method."
  },
  {
    id: 30,
    title: "Create Element",
    category: "dom",
    difficulty: "medium",
    description: "Write a function that creates an HTML element with specified attributes and text content.",
    examples: [
      { input: "'div', { class: 'box' }, 'Hello'", output: "<div class='box'>Hello</div>" }
    ],
    starterCode: "function createElement(tag, attrs, text) {\n  // Your code here\n  \n}",
    solution: "function createElement(tag, attrs, text) {\n  const el = document.createElement(tag);\n  for (let key in attrs) el.setAttribute(key, attrs[key]);\n  if (text) el.textContent = text;\n  return el;\n}",
    testCases: [
      { input: ['div', { class: 'box' }, 'Hello'], expected: 'element' }
    ],
    hint: "Use document.createElement() and setAttribute()."
  },
  {
    id: 31,
    title: "Event Delegation",
    category: "dom",
    difficulty: "medium",
    description: "Write a function that implements event delegation for dynamically added elements.",
    examples: [
      { input: "parent, 'click', '.child', handler", output: "delegated event" }
    ],
    starterCode: "function delegate(parent, event, selector, handler) {\n  // Your code here\n  \n}",
    solution: "function delegate(parent, event, selector, handler) {\n  parent.addEventListener(event, function(e) {\n    if (e.target.matches(selector)) {\n      handler.call(e.target, e);\n    }\n  });\n}",
    testCases: [
      { input: [{ addEventListener: () => {} }, 'click', '.btn', () => {}], expected: undefined }
    ],
    hint: "Add listener to parent and check e.target.matches()."
  },

  // Async/Promises Category
  {
    id: 32,
    title: "Simple Promise",
    category: "async",
    difficulty: "easy",
    description: "Write a function that returns a Promise that resolves after a specified delay.",
    examples: [
      { input: "1000", output: "Promise resolves after 1 second" }
    ],
    starterCode: "function delay(ms) {\n  // Your code here\n  \n}",
    solution: "function delay(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}",
    testCases: [
      { input: [100], expected: 'promise' }
    ],
    hint: "Return a new Promise with setTimeout inside."
  },
  {
    id: 33,
    title: "Fetch with Timeout",
    category: "async",
    difficulty: "medium",
    description: "Write a function that fetches data with a timeout (rejects if takes too long).",
    examples: [
      { input: "url, 5000", output: "data or timeout error" }
    ],
    starterCode: "function fetchWithTimeout(url, timeout) {\n  // Your code here\n  \n}",
    solution: "function fetchWithTimeout(url, timeout) {\n  return Promise.race([\n    fetch(url),\n    new Promise((_, reject) => \n      setTimeout(() => reject(new Error('Timeout')), timeout)\n    )\n  ]);\n}",
    testCases: [
      { input: ['https://api.example.com', 5000], expected: 'promise' }
    ],
    hint: "Use Promise.race() with fetch and a timeout promise."
  },
  {
    id: 34,
    title: "Retry Function",
    category: "async",
    difficulty: "hard",
    description: "Write a function that retries an async operation a specified number of times.",
    examples: [
      { input: "asyncFunc, 3", output: "result or error after 3 tries" }
    ],
    starterCode: "async function retry(fn, retries) {\n  // Your code here\n  \n}",
    solution: "async function retry(fn, retries) {\n  for (let i = 0; i < retries; i++) {\n    try {\n      return await fn();\n    } catch (err) {\n      if (i === retries - 1) throw err;\n    }\n  }\n}",
    testCases: [
      { input: [async () => 42, 3], expected: 'promise' }
    ],
    hint: "Use a loop with try-catch to retry on failure."
  },
  {
    id: 35,
    title: "Promise All Settled",
    category: "async",
    difficulty: "medium",
    description: "Write a function that mimics Promise.allSettled() - waits for all promises to settle.",
    examples: [
      { input: "[promise1, promise2]", output: "[{status:'fulfilled',value:1},{status:'rejected',reason:error}]" }
    ],
    starterCode: "function allSettled(promises) {\n  // Your code here\n  \n}",
    solution: "function allSettled(promises) {\n  return Promise.all(\n    promises.map(p => \n      Promise.resolve(p)\n        .then(value => ({ status: 'fulfilled', value }))\n        .catch(reason => ({ status: 'rejected', reason }))\n    )\n  );\n}",
    testCases: [
      { input: [[Promise.resolve(1), Promise.reject('error')]], expected: 'promise' }
    ],
    hint: "Map each promise to catch both resolve and reject."
  }
];

// Application State
let currentProblemIndex = 0;
let currentCategory = 'all';
let completedProblems = new Set(JSON.parse(localStorage.getItem('completedProblems') || '[]'));

// DOM Elements
const problemTitle = document.getElementById('problem-title');
const problemDifficulty = document.getElementById('problem-difficulty');
const problemCategory = document.getElementById('problem-category');
const problemDescription = document.getElementById('problem-description');
const problemExamples = document.getElementById('problem-examples');
const codeEditor = document.getElementById('code-editor');
const resultsSection = document.getElementById('results-section');
const testResults = document.getElementById('test-results');
const problemCounter = document.getElementById('problem-counter');
const progressCount = document.getElementById('progress-count');
const runBtn = document.getElementById('run-btn');
const solutionBtn = document.getElementById('solution-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const markCompleteBtn = document.getElementById('mark-complete-btn');
const resetBtn = document.getElementById('reset-btn');
const categoryBtns = document.querySelectorAll('.category-btn');

// Initialize
function init() {
  renderProblem();
  updateProgress();
  attachEventListeners();
}

// Render Current Problem
function renderProblem() {
  const filteredProblems = getFilteredProblems();
  const problem = filteredProblems[currentProblemIndex];
  
  if (!problem) return;
  
  problemTitle.textContent = problem.title;
  problemDifficulty.textContent = problem.difficulty;
  problemDifficulty.className = `difficulty-badge difficulty-${problem.difficulty}`;
  problemCategory.textContent = problem.category.charAt(0).toUpperCase() + problem.category.slice(1);
  problemDescription.textContent = problem.description;
  
  // Render examples
  problemExamples.innerHTML = '<h3>Examples:</h3>';
  problem.examples.forEach(example => {
    const exampleDiv = document.createElement('div');
    exampleDiv.className = 'example';
    exampleDiv.innerHTML = `
      <div class="example-label">Input:</div>
      <div class="example-content">${example.input}</div>
      <div class="example-label">Output:</div>
      <div class="example-content">${example.output}</div>
    `;
    problemExamples.appendChild(exampleDiv);
  });
  
  // Load saved code or starter code
  const savedCode = localStorage.getItem(`problem-${problem.id}`);
  codeEditor.value = savedCode || problem.starterCode;
  
  // Update navigation
  problemCounter.textContent = `${currentProblemIndex + 1} / ${filteredProblems.length}`;
  prevBtn.disabled = currentProblemIndex === 0;
  nextBtn.disabled = currentProblemIndex === filteredProblems.length - 1;
  
  // Update complete button
  if (completedProblems.has(problem.id)) {
    markCompleteBtn.classList.add('completed');
    markCompleteBtn.innerHTML = '✓';
  } else {
    markCompleteBtn.classList.remove('completed');
    markCompleteBtn.innerHTML = '✓';
  }
  
  // Hide results
  resultsSection.classList.remove('show');
}

// Get Filtered Problems
function getFilteredProblems() {
  if (currentCategory === 'all') return problems;
  return problems.filter(p => p.category === currentCategory);
}

// Run Tests
function runTests() {
  const problem = getFilteredProblems()[currentProblemIndex];
  const userCode = codeEditor.value;
  
  // Save code
  localStorage.setItem(`problem-${problem.id}`, userCode);
  
  testResults.innerHTML = '';
  let allPassed = true;
  
  try {
    // Execute user code
    eval(userCode);
    
    // Run test cases
    problem.testCases.forEach((test, index) => {
      try {
        const funcName = userCode.match(/function\s+(\w+)/)?.[1];
        if (!funcName) throw new Error('No function found');
        
        const result = eval(`${funcName}(...${JSON.stringify(test.input)})`);
        const passed = JSON.stringify(result) === JSON.stringify(test.expected);
        
        if (!passed) allPassed = false;
        
        const testDiv = document.createElement('div');
        testDiv.className = `test-result ${passed ? 'passed' : 'failed'}`;
        testDiv.innerHTML = `
          <div class="test-info">Test ${index + 1}: ${funcName}(${test.input.map(i => JSON.stringify(i)).join(', ')})</div>
          <div class="test-status ${passed ? 'passed' : 'failed'}">${passed ? '✓ Passed' : '✗ Failed'}</div>
        `;
        testResults.appendChild(testDiv);
      } catch (err) {
        allPassed = false;
        const testDiv = document.createElement('div');
        testDiv.className = 'test-result failed';
        testDiv.innerHTML = `
          <div class="test-info">Test ${index + 1}</div>
          <div class="test-status failed">✗ Error</div>
        `;
        testResults.appendChild(testDiv);
      }
    });
    
    if (allPassed) {
      completedProblems.add(problem.id);
      localStorage.setItem('completedProblems', JSON.stringify([...completedProblems]));
      markCompleteBtn.classList.add('completed');
      updateProgress();
    }
    
  } catch (err) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = `Error: ${err.message}`;
    testResults.appendChild(errorDiv);
  }
  
  resultsSection.classList.add('show');
}

// Show Hint
function showHint() {
  const problem = getFilteredProblems()[currentProblemIndex];
  alert(`Hint: ${problem.hint}`);
}

// Mark Complete
function toggleComplete() {
  const problem = getFilteredProblems()[currentProblemIndex];
  
  if (completedProblems.has(problem.id)) {
    completedProblems.delete(problem.id);
    markCompleteBtn.classList.remove('completed');
  } else {
    completedProblems.add(problem.id);
    markCompleteBtn.classList.add('completed');
  }
  
  localStorage.setItem('completedProblems', JSON.stringify([...completedProblems]));
  updateProgress();
}

// Reset Code
function resetCode() {
  const problem = getFilteredProblems()[currentProblemIndex];
  codeEditor.value = problem.starterCode;
  localStorage.removeItem(`problem-${problem.id}`);
  resultsSection.classList.remove('show');
}

// Navigation
function navigateProblem(direction) {
  currentProblemIndex += direction;
  renderProblem();
}

// Category Filter
function filterByCategory(category) {
  currentCategory = category;
  currentProblemIndex = 0;
  
  // Update active button
  categoryBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    }
  });
  
  renderProblem();
}

// Update Progress
function updateProgress() {
  progressCount.textContent = `${completedProblems.size}/${problems.length}`;
}

// Event Listeners
function attachEventListeners() {
  runBtn.addEventListener('click', runTests);
  solutionBtn.addEventListener('click', showHint);
  markCompleteBtn.addEventListener('click', toggleComplete);
  resetBtn.addEventListener('click', resetCode);
  prevBtn.addEventListener('click', () => navigateProblem(-1));
  nextBtn.addEventListener('click', () => navigateProblem(1));
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => filterByCategory(btn.dataset.category));
  });
  
  // Auto-save code
  codeEditor.addEventListener('input', () => {
    const problem = getFilteredProblems()[currentProblemIndex];
    localStorage.setItem(`problem-${problem.id}`, codeEditor.value);
  });
}

// Initialize app
init();
