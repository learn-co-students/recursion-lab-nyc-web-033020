// Code your solution here!

// Code your solution here!

function printString (myString){
    console.log(myString[0])

    if (myString.length > 1){
        let myPartialString = myString.substring(1, myString.length)
        printString(myPartialString)
    } else {
        return true
    }
}

function reverseString(myString){
    if (myString.length < 2){
       return myString
    } else {
        return reverseString( myString.substring(1)) + myString[0]
    }
}

// My solution, which the learn lab doesn't like for some reason
// function isPalindrome(myString){

//     if(myString.length < 4){
//         if(myString[0] == myString[myString.length-1]){
//             return true
//         }else{
//             return false
//         }
//     } else {
//         return isPalindrome(myString.substring(1, myString.length-1))
//     }

// }
function isPalindrome(myString) {
    let l = myString.length;
  
    if (l < 2) {
      return true;
    } else if (myString[l - 1] === myString[0]) {
      return isPalindrome(myString.substring(1, l - 1));
    } else {
      return false;
    }
  }

  function addUpTo(myArray, index){
    return index ? myArray[index] + addUpTo(myArray, index - 1) : myArray[index]
    
  }

  function maxOf(array){
            if(array.length ===1){
                return array[0]
            }else{
                return Math.max(array.pop(), maxOf(array));
            }
  }

  function includesNumber(myArray, myNumber) {
    if (!myArray.length) {
      return false;
    } else if (myArray[0] === myNumber) {
      return true;
    } else {
      return includesNumber(myArray.slice(1), myNumber);
    }
  }