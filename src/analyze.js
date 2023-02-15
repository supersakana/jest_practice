function analyze(arr) {
    return {
        average: getAverage(arr),
        min: Math.min.apply(Math, arr),
        max: Math.max.apply(Math, arr),
        length: arr.length
    }
  }

function getAverage(arr){
    return arr.reduce((a, b) => a + b) / arr.length;
}
  
export { analyze }