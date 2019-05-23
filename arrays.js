var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  var temp = [element, ...array]
  return temp
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}
function addElementToEndOfArray(array, element) {
  var temp = [element, ...array]
  return temp
}
function destructivelyAddElementToEndOfArray(array, element) {
  array = [element, ...array]
  return array
}