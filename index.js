function processData(input) {
  var inputSplited = input.split('\n');
  var nExperiments = parseInt(inputSplited[0]);

  inputSplited.shift();
  for (var i=0;i<nExperiments;i++){
    inputSplited.shift(); 
    var numbers = inputSplited[0].split(' ').map(function(x) { return parseInt(x) });
    inputSplited.shift();
    
    var counts = arrayCountElem(numbers);
    counts = Object.keys(counts).map(function (key) {return counts[key]});
    var total = 0;
    
    for (var j=0;j<counts.length;j++) {
      
      if(counts[j] > 1 ) {
        total = total + smartPermutations(counts[j], 2);
      } else { continue;  }
    }
    console.log(total);
  }

  function arrayCountElem(arr) {
    var results = {};
    for(var z=0;z<arr.length;z++){
      results[arr[z]] ? results[arr[z]] = results[arr[z]] + 1: results[arr[z]] = 1;
    }
    return results;
  }

  function permutations(n, k) {
    return factorial(n) / factorial (n-k);
  }

  function smartPermutations (n, k) {
    // since k is always equal to 2
    return n * (n-1); 
  }

  function factorial (n) {
    var rval=1;
    for (var i = 2; i <= n; i++)
        rval = rval * i;
    return rval;
  }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
