function remove(arr, index) {
    
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
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
    "remove function works - case 1",
    remove([10, 293, 292, 176, 29], 3),
    [10, 293, 292, 29]
  );
  test(
    "remove function works - case 2",
    remove(["a", "b", "c", "d", "e", "f", "g"], 6),
    ["a", "b", "c", "d", "e", "f"]
  );
  