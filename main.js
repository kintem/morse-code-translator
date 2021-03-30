const userInput = document.querySelector("#user-input");
const translation = document.querySelector("#translation");
const form = document.querySelector("form");

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const morseCode = ["-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

const translate = (userInput) => {
  if ((/[a-zA-Z0-9]/).test(userInput)) {
    const inputArray = userInput.split("");

    const morseArray = inputArray.map(input=>{
      if ((/[0-9]/).test(input)) {
        return morseCode[+input]
      } else if ((/[a-zA-Z]/).test(input)) {
        let index = alphabet.indexOf(input.toLowerCase());
        return morseCode[index+10]
      } else if ((/[ ]/).test(input)) {
        return " / ";
      }
    })

    translation.innerHTML = `"${userInput}" in morse code: <span>${morseArray.join(" ")}</span>`;

  } else if ((/[.-]/).test(userInput)) {
    const inputArray = userInput.split(" ");

    const englishArray = inputArray.map(input=>{
      let index = morseCode.indexOf(input);
      
      if (alphabet[index-10]) {
        return alphabet[index-10];
      } else if (input === "/") {
        return "/";
      } else {
        return index;
      }
    }); 

    translation.innerHTML = `"${userInput}" in English: <span>${englishArray.join(" ")}</span>`;
  }
}

form.addEventListener("submit", (event) =>{
  event.preventDefault();
  translate(userInput.value);
});