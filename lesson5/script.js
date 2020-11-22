console.log("====  Test Cases  ====");
function max(x, y) {
  if (x > y) return x;
  return y;
}

console.log(
  "Expected output of max(20,10) is 20 and  " +
    myFunctionTest(20, function () {
      return max(20, 10);
    })
);
console.log(
  "Expected output of max(-1,-50) is -1 and  " +
    myFunctionTest(-1, function () {
      return max(-1, -50);
    })
);

function maxOfThree(x, y, z) {
  let max = x;
  if (y > max) {
    max = y;
  }
  if (z > max) {
    max = z;
  }
  return max;
}

console.log(
  "Expected output of maxOfThree(20,10,5) is 20 and  " +
    myFunctionTest(20, function () {
      return maxOfThree(20, 10, 5);
    })
);

function isVowel(c) {
  if (c.length > 1) return "error: wrong input";
  let vowels = "aeiou";
  return vowels.includes(c);
}

console.log(
  "Expected output of isVowel(e) is true and  " +
    myFunctionTest(true, function () {
      return isVowel("e");
    })
);
console.log(
  "Expected output of isVowel(f) is false and  " +
    myFunctionTest(false, function () {
      return isVowel("f");
    })
);

function sum(arr) {
  let total = 0;
  for (n of arr) {
    total += n;
  }
  return total;
}

console.log(
  "Expected output of sum([1,2,3,4]) is 10 and  " +
    myFunctionTest(10, function () {
      return sum([1, 2, 3, 4]);
    })
);
console.log(
  "Expected output of sum([5,8,9,4]) is 26 and  " +
    myFunctionTest(26, function () {
      return sum([5, 8, 9, 4]);
    })
);

function multiply(arr) {
  let total = 1;
  for (n of arr) {
    total *= n;
  }
  return total;
}

console.log(
  "Expected output of multiply([5,8,9,4,0]) is 0 and  " +
    myFunctionTest(0, function () {
      return multiply([5, 8, 9, 4, 0]);
    })
);

function reverse(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
  }
  return revStr;
}
console.log(
  "expected output of reverse is gib " +
    myFunctionTest("gib", function () {
      return reverse("big");
    })
);
console.log(
  "expected output of reverse is ekeleda " +
    myFunctionTest("ekeleda", function () {
      return reverse("adeleke");
    })
);

function findLongestWord(arr) {
  let longestWord = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}

console.log(
  "expected output of findLongestWord is sixsix " +
    myFunctionTest("sixsix", function () {
      return findLongestWord(["one", "two", "three", "sixsix"]);
    })
);
console.log(
  "expected output of findLongestWord is persuade " +
    myFunctionTest("persuade", function () {
      return findLongestWord(["pull", "profess", "persuade", "sixsix"]);
    })
);

function filterLongWords(arr, i) {
  let longerWords = [];
  let index = 0;
  for (word of arr) {
    if (word.length > i) {
      longerWords[index] = word;
      index++;
    }
  }
  return longerWords;
}

console.log(
  "expected output of filterLongWords is '[apple,orange]' " +
    myFunctionTest(JSON.stringify(["apple", "orange"]), function () {
      const longWords = filterLongWords(
        ["one", "apple", "orange", "two", "the"],
        4
      );
      return JSON.stringify(longWords);
    })
);
console.log(
  "expected output of filterLongWords is '[]' " +
    myFunctionTest(JSON.stringify([]), function () {
      const longWords = filterLongWords(
        ["preach", "praise", "push", "pull", "testing"],
        7
      );
      return JSON.stringify(longWords);
    })
);

function exercise9() {
  const a = [1, 3, 5, 3, 3];
  const b = a.map(function (elem, i, array) {
    return elem * 10;
  });
  console.log(b);
  const c = a.filter(function (elem, i, array) {
    return elem === 3;
  });
  console.log(c);
  const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
  });
  console.log(d);
}

function myFunctionTest(expected, func) {
  let errorMsg = "Expected " + expected + " found " + func();
  console.assert(expected === func(), { expected, errorMsg });
  return expected === func() ? "TEST SUCCEEDED" : "TEST FAILED";
}
