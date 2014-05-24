// Basic logging

console.log("Basic string logging");
// Inspecting variables


var obj = {1: true, 2: false};
console.log(obj);


// Using string interpoloation
console.log("This is a number: %d, and this is a string: %s, and this is a JSON object: %j", 42, "Hello", obj);

// Warning strings
console.log("Warn");

// to print stack trace
console.trace();

/**
 * returns the ...
 * @param {String}
 * @return {String}
 * @private
 */
function getTime () {
    // Function Logic
    // Iterate Through
    for (var i = 0; i < 5000; i++) {
        // Loop Logic
        console.log("line " + i);
    }
}

console.time("gettime");
getTime();
console.timeEnd("gettime");