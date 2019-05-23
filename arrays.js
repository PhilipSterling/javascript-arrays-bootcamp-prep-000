var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  var temp = array.push(element)
  return temp
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.push(element)
  return array
}