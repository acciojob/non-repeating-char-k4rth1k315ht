function firstNonRepeatedChar(str) {
 // Write your code here
	  // Create a map to store character frequencies
    const charCount = new Map();

    // Iterate through the string to populate the map with character frequencies
    for (let char of str) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
        } else {
            charCount.set(char, 1);
        }
    }

    // Iterate through the string again to find the first character with frequency 1
    for (let char of str) {
        if (charCount.get(char) === 1) {
            return char; // First non-repeated character found
        }
    }

    // If no non-repeated character is found, return null
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
