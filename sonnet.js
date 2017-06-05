
// Take the contents of the sonnet div and place it in a variable.

const sonnet = document.getElementById('sonnet');
let sonnetText = sonnet.innerHTML;

console.log("sonnet", sonnetText);


// Find and output the starting position of the word "orphans".

var orphanIndex = sonnetText.indexOf("orphans")

console.log("index of Orphans", orphanIndex);



// Output the number of characters in the sonnet.

var sonnetLength = sonnetText.length;
console.log("sonnet text length", sonnetLength);


// Replace the first occurance of the string "winter" with "yuletide".

var sonnetUpdate = sonnetText.replace("winter", "yuletide");
console.log("replce text", sonnetUpdate);


// Replace all occurances of the string "the" with "a large".


sonnetUpdate = sonnetUpdate.replace(/the /g, "a large ");
console.log("replace more text", sonnetUpdate);


// Set the content of the sonnet div with the new string.

sonnet.innerHTML = sonnetUpdate;
