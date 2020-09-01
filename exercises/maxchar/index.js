// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let object = {};
    let max = 0;
    let maxCharacter = '';
   
    for (let character of str) {
        if (object[character]) {
            object[character]++;
        } else {
            object[character] = 1;
        }
    }
    for (let character in object) {
        if (object[character] > max) {
            max = object[character];
            maxCharacter = character;
        }
    }
    return maxCharacter;
}
module.exports = maxChar;
