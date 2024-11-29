function tidyUpString(strArr) {
    return strArr.map(str => str.trim().replace(/\//g, '').toLowerCase());
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
    "tidyUpString function works - case 1",
    tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]),
    ["daniel", "irina", "gordon", "ashleigh"]
  );
  test(
    "tidyUpString function works - case 2",
    tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),
    ["sanyia", "michael", "anthony", "tim"]
  );
  