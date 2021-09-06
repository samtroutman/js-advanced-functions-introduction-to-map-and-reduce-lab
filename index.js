// Your code here
function mapToNegativize(src) {
    let m = []
    for (let i = 0; i < src.length; i++ ) {
      m.push(-1 * src[i])
    }
    return m
  }

  function mapToNoChange(src) {
    let m = []
    for (let i = 0; i < src.length; i++ ) {
      m.push(src[i])
    }
    return m
  }

  function mapToDouble(src) {
    let m = []
    for (let i = 0; i < src.length; i++ ) {
      m.push(2 * src[i])
    }
    return m
  }

  function mapToSquare(src) {
    let m = []
    for (let i = 0; i < src.length; i++ ) {
      m.push(src[i] * src[i])
    }
    return m
  }

  function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }
  
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }
