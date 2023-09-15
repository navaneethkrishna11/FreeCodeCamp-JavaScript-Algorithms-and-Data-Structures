function rot13(str) {
  // Define a function to perform the ROT13 transformation on a single character
  function rot13Char(char) {
    const charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) { // Check if it's an uppercase letter
      return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) { // Check if it's a lowercase letter
      return String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
    } else {
      return char; // Non-alphabetic character, leave it unchanged
    }
  }

  // Apply the ROT13 transformation to each character in the string
  return str.split('').map(rot13Char).join('');
}

console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); // Output: "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); // Output: "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // Output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
