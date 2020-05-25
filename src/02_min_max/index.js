// Find the biggest and the smallest number in array of integers.
//
// RESTRICTIONS: do this without using sort, min or max functionalities provided by language.
// 
// For example if we have an array 10,4,5,7,99,1 the smallest number will be 1 and the biggest would be 99.
// Return it as a JSON object with properties min and max.

exports.minMax = function (data) {
    const result = {}

    for (let val of data) {
        if (!result.min && !result.max) {
            result['min'] = val; // first time only
            result['max'] = val; // first time only
        } else {
            if (val < result.min) result.min = val;
            if (val > result.min) result.max = val;
        }
    }
    return result;
}