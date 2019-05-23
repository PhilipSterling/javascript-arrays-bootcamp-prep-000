var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  var temp = [element, ...array]
  return temp
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  var temp = [...array, element]
  return temp
}
function destructivelyAddElementToEndOfArray(array, element) {
  array = array.push(element)
  return array
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return (array = array.shift())
}
function removeElementFromBeginningOfArray(array) {
  var temp = array.slice(0,1)
 return temp
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}
function removeElementFromEndOfArray(array) {
  var temp = array.slice(0, array.length - 1)
 return temp
}