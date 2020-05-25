let indhu = require("./node_modules/indhu-test/indhu");
let rec = require("./rec");

let result = rec(3, 4);
let expected = 12;

indhu.test(result).toBeEqualTo(expected);

result = rec(2, 8);
expected = 16;

indhu.test(result).toBeEqualTo(expected);

/*Fail case*/
result = rec(8, 6);
expected = 40;

indhu.test(result).toBeEqualTo(expected);
