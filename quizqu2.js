function validate(num) {
    return typeof num === 'number' && num % 2 === 0 && num <= 100;
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
  
  test("validate function works - case 1", validate(10), true);
  test("validate function works - case 2", validate(18), true);
  test("validate function works - case 3", validate(17), false);
  test("validate function works - case 4", validate("Ten"), false);
  test("validate function works - case 5", validate(108), false);
  