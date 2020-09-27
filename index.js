// Code your solution here!

function printString(str){
  console.log(str[0])
  if(str.length > 1){
    let sub = str.substring(1, str.length)
    printString(sub)
  }else{
    "we are done"
  }
}


function reverseString(str){
  if(str < 2){
    return str
  }else{
    return reverseString(str.substring(1, str.length))+str[0] 
  }
}

function isPalindrome(str) {
  if(str.length < 2) {
    return true
  }
  else if(str[0] == str[str.length-1]){
      return isPalindrome(str.slice(1,str.length-1))
  }
  else{
    return false
  }
}

function addUpTo(myArray, index) {
  return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index]
}

function maxOf(arr) {
  if(arr.length === 1){
    return arr[0]
  }else{
    return Math.max(arr.pop(), maxOf(arr))
  }
}

function includesNumber(arr,n) {
   if (!arr.length) {
    return false;
  }else if(arr[0] === n){
   return true
 }else{
    return includesNumber(arr.slice(1),n)
  }
 
}
