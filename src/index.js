// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix != undefined) {
    for (i = 0; i < matrix.length; i++) {
      if (i % 2 != 0) {
        matrix[i] = matrix[i].reverse()
      }
    }
    let res = unite(matrix)
    return res
  }
  return []
}

function unite(matrix) {
  let arr = []
  let elem
  for (i = 0; i < matrix.length; i++) {
    elem = matrix[i]
    for (j = 0; j < elem.length; j++) {
      arr.push(elem[j])
    }
  }
  return arr
}
