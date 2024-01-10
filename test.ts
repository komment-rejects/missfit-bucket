
/**
* @description The given function `add` takes two numbers `x` and `y` of type `number`,
* and returns their sum.
* 
* @param { number } x - The `x` input parameter is an optional number parameter that
* represents the first operand for addition.
* 
* @param { number } y - In the provided function `add`, the `y` input parameter is
* used to specify the second operand to be added to the first operand `x`.
* 
* @returns { number } The output returned by the function `add` is the sum of the
* input parameters `x` and `y`.
*/
const add = (x: number, y: number): number => x + y;

/**
* @description The function takes two parameters `x` and `y`, both of type number
* and returns their difference.
* 
* @param { number } x - The `x` input parameter represents the first number to be
* subtracted from the `y` input parameter.
* 
* @param { number } y - The `y` input parameter subtracts from the `x` value.
* 
* @returns { number } The given function takes two arguments `x` and `y`, both of
* type `number`.
*/
const sub = ((x: number, y: number): number => x - y;

/**
* @description The function `mul` takes two numbers `x` and `y` and returns their
* product (`x * y`).
* 
* @param { number } x - In the given function `mul`, the `x` input parameter is
* multiplied by the `y` input parameter and the result is returned.
* 
* @param { number } y - In the provided arrow function `mul`, the `y` input parameter
* is multiplied by the value passed to the function as the `x` parameter.
* 
* @returns { number } The function `mul` takes two `number` parameters `x` and `y`,
* and returns their multiplication: `x * y`.
* 
* In other words，the output of the function `mul` is the result of multiplying `x`
* by `y`.
*/
const mul = (x: number, y: number): number => x * y;

/**
* @description This function takes two numbers `x` and `y`, and returns the result
* of dividing `x` by `y`, unless `y` is equal to zero (in which case it returns 0).
* 
* @param { number } x - The `x` input parameter passes a value to be divided by the
* `y` input and return result as output when division is possible i.e `y !== 0`
* 
* @param { number } y - The `y` input parameter is used to divide `x` by it.
* 
* @returns { number } The output returned by the function `div` is a number that is
* equal to the input `x` divided by the input `y`, except when `y` is 0 (in which
* case the result is 0).
*/
const div = (x: number, y: number): number => y === 0 ? 0 : x / y;

/**
* @description This function is a mathematical function called "log" that takes two
* arguments: x (a number) and y (an optional number = 10).
* 
* @param { number } x - The `x` input parameter is the value for which we want to
* calculate the logarithm.
* 
* @param { number } [y=10] - The `y` input parameter is the default value for the
* second argument `b` of the `Math.log()` function.
* 
* @returns { number } The output returned by this function is a value computed using
* the natural logarithm (base "e") of the input `x`, with the optional argument `y`
* used to specify a different base for the computation.
* 
* The function takes two arguments:
* 
* 	- `x`: the input value to be logged
* 	- `y`: an optional argument specifying the base for the logarithm (defaults to 10)
* 
* The function returns the result of computing the natural logarithm of `x` with
* respect to the specified base (or 10 if no base is provided).
*/
const log = (x: number, y: number = 10): number => {
  // change of base formula
  return Math.log(x) / Math.log(b)
};




