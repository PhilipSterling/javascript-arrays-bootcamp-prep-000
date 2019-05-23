var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  var temp = array.unshift(element)
  return temp
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}