function formatPercentage(arr) {
    return arr.map(num => {
      
      if (num > 100) num = 100;
  
    
      return `${num.toFixed(2)}%`;
    });
  }
  
  
  
  function test(test_name, actual, expected) {
    let status;
  
    let isEqual;
    if (Array.isArray(expected)) {
      isEqual = arraysEqual(actual, expected);
    } else {
      isEqual = actual === expected;
    }
  
    if (isEqual) {
      status = "PASSED";
    } else {
      status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
    }
  
    console.log(`${test_name}: ${status}`);
  }
  
  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
  
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
  
    return true;
  }
  
  test(
    "formatPercentage function works - case 1",
    formatPercentage([23, 18.103, 187.2, 0.372]),
    ["23%", "18.10%", "100%", "0.37%"]
  );
  